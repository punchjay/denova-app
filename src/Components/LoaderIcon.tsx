import styled from 'styled-components'
import { rotate } from './keyFrames.style'

const LoadingIcon = styled.img`
  margin: 0 auto;
  width: 5rem;
  animation: ${rotate} 4s linear infinite;
  filter: drop-shadow(0 0 2px #8b5cf6);
`
export default LoadingIcon
