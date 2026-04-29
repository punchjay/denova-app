import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`

const Cursor = styled.span`
  animation: ${blink} 1s step-end infinite;
`

interface Props {
  text: string
  speed?: number
  delay?: number
}

const TypeWriter = ({ text, speed = 80, delay = 500 }: Props) => {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(timeout)
  }, [delay])

  useEffect(() => {
    if (!started || displayed.length >= text.length) return
    const timeout = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1))
    }, speed)
    return () => clearTimeout(timeout)
  }, [started, displayed, text, speed])

  return (
    <>
      {displayed}
      <Cursor>|</Cursor>
    </>
  )
}

export default TypeWriter
