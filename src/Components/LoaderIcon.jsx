import styled from 'styled-components'
import { rotate } from './keyFrames.style'

const LoadingIcon = styled.img`
  margin: 0 auto;
  width: 3rem;
  animation: ${rotate} 4s linear infinite;
`
export default LoadingIcon
