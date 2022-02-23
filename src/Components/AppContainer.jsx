import styled from 'styled-components'
import { fadeIn } from './keyFrames.style'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 5.5rem 0 3rem;
  background: #1b1e22;
  color: #b1b3b4;
  text-align: center;
  animation: ${fadeIn} 0.4s both 0.8s ease-out;
  @media (min-width: 768px) {
    padding-top: 9rem;
  }
`

export default AppContainer
