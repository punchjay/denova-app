import styled from 'styled-components'
import { fadeIn } from './keyFrames.style'

const AppContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 4rem 3rem;
  background: transparent;
  color: #b1b3b4;
  text-align: center;
  animation: ${fadeIn} 0.4s both 0.9s ease-out;
  @media (min-width: 768px) {
    padding-top: 6rem;
  }
`

export default AppContainer
