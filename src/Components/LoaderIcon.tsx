import styled from 'styled-components'
import { rotate } from './keyFrames.style'
import { colors } from './colors'

const LoaderIcon = styled.img`
  margin: 0 auto;
  width: 5rem;
  animation: ${rotate} 4s linear infinite;
  filter: drop-shadow(0 0 3px ${colors.purple});
`
export default LoaderIcon
