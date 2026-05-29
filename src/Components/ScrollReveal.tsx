import { useEffect, useRef, useState, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { fadeIn, FADE_IN_OFFSET } from './keyFrames.style'

const Wrapper = styled.div<{ $visible: boolean; $delay: number }>`
  opacity: 0;
  transform: translateY(${FADE_IN_OFFSET});
  ${({ $visible, $delay }) =>
    $visible &&
    css`
      animation: ${fadeIn} 0.6s ease ${$delay}ms forwards;
    `}
`

const ScrollReveal = ({
  children,
  delay = 0,
}: {
  children: ReactNode
  delay?: number
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Wrapper ref={ref} $visible={visible} $delay={delay}>
      {children}
    </Wrapper>
  )
}

export default ScrollReveal
