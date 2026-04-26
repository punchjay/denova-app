import styled from 'styled-components'

// Project palette as rgba so box-shadow handles them correctly in all browsers
const COLORS = [
  'rgba(177,179,180,{a})', // #b1b3b4
  'rgba(32,187,252,{a})', //  #20bbfc
  'rgba(255,255,255,{a})', // #fff
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

// Generated once at module level so positions are stable across re-renders
const tinyStars = buildShadows(700, 0.4)
const smallStars = buildShadows(250, 0.65)
const mediumStars = buildShadows(100, 0.9)

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`

const StarLayer = styled.div<{ $size: string; $shadows: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  border-radius: 50%;
  background: transparent;
  box-shadow: ${({ $shadows }) => $shadows};
`

const StarBackground = () => (
  <Backdrop>
    <StarLayer $size="1px" $shadows={tinyStars} />
    <StarLayer $size="1.5px" $shadows={smallStars} />
    <StarLayer $size="2px" $shadows={mediumStars} />
  </Backdrop>
)

export default StarBackground
