import styled from 'styled-components'
import { fadeIn } from './keyFrames.style'

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 14rem;
  animation: ${fadeIn} 0.4s both 0.3s ease-out;
`
export default LoaderContainer
