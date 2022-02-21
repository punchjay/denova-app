import styled from 'styled-components'
import { rotate } from './keyFrames.style'

const LoadingIcon = styled.img`
  width: 3rem;
  animation: ${rotate} 4s linear infinite;
`
export default LoadingIcon
