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
}

const TypeWriter = ({ text, speed = 80 }: Props) => {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    if (displayed.length >= text.length) return
    const timeout = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1))
    }, speed)
    return () => clearTimeout(timeout)
  }, [displayed, text, speed])

  return (
    <>
      {displayed}
      <Cursor>|</Cursor>
    </>
  )
}

export default TypeWriter
