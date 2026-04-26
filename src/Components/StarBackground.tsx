import styled, { keyframes } from 'styled-components'

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

// Five groups with different star counts — each animates independently
const groupA = buildShadows(800, 0.65)
const groupB = buildShadows(400, 0.65)
const groupC = buildShadows(300, 0.8)
const groupD = buildShadows(200, 0.8)
const groupE = buildShadows(200, 1.0)

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
  animation: ${twinkle} ${({ $duration }) => $duration} ${({ $delay }) => $delay} ease-in-out infinite;
`

const StarBackground = () => (
  <Backdrop>
    <StarLayer $size="1px" $shadows={groupA} $duration="2.8s" $delay="0s" />
    <StarLayer $size="1px" $shadows={groupB} $duration="5s" $delay="0.8s" />
    <StarLayer $size="1.5px" $shadows={groupC} $duration="3.5s" $delay="0.4s" />
    <StarLayer $size="1.5px" $shadows={groupD} $duration="5.5s" $delay="1.4s" />
    <StarLayer $size="2px" $shadows={groupE} $duration="4.2s" $delay="0.7s" />
  </Backdrop>
)

export default StarBackground
