import { useState } from 'react'
import styled, { keyframes } from 'styled-components'

const COLORS = [
  'rgba(177,179,180,{a})', // #b1b3b4
  'rgba(32,187,252,{a})', //  #20bbfc
  'rgba(255,255,255,{a})', // #fff
  'rgba(167,139,250,{a})', // #a78bfa
  'rgba(167,139,250,{a})', // #a78bfa
]

const buildShadows = (count: number, opacity: number): string => {
  const values: string[] = []
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 2000)
    const y = Math.floor(Math.random() * 4000)
    const template = COLORS[Math.floor(Math.random() * COLORS.length)]
    const color = template.replace('{a}', String(opacity))
    values.push(`${x}px ${y}px ${color}`)
  }
  return values.join(',')
}

const twinkle = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`

const StarLayer = styled.div<{
  $size: string
  $shadows: string
  $duration: string
  $delay: string
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  border-radius: 50%;
  background: transparent;
  box-shadow: ${({ $shadows }) => $shadows};
  animation: ${twinkle} ${({ $duration }) => $duration}
    ${({ $delay }) => $delay} ease-in-out infinite;
`

const isTest = !!import.meta.env.VITEST

const StarBackground = () => {
  // useState lazy initializer runs once per mount — stable across re-renders,
  // and mockable in tests via vi.spyOn(Math, 'random')
  const [groups] = useState(() => ({
    a: buildShadows(isTest ? 2 : 800, 0.65),
    b: buildShadows(isTest ? 2 : 400, 0.65),
    c: buildShadows(isTest ? 2 : 300, 0.8),
    d: buildShadows(isTest ? 2 : 200, 0.8),
    e: buildShadows(isTest ? 2 : 200, 1.0),
  }))

  return (
    <Backdrop>
      <StarLayer $size="1px" $shadows={groups.a} $duration="2.8s" $delay="0s" />
      <StarLayer $size="1px" $shadows={groups.b} $duration="5s" $delay="0.8s" />
      <StarLayer
        $size="1.5px"
        $shadows={groups.c}
        $duration="3.5s"
        $delay="0.4s"
      />
      <StarLayer
        $size="1.5px"
        $shadows={groups.d}
        $duration="5.5s"
        $delay="1.4s"
      />
      <StarLayer
        $size="2px"
        $shadows={groups.e}
        $duration="4.2s"
        $delay="0.7s"
      />
    </Backdrop>
  )
}

export default StarBackground
