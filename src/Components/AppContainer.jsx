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
  animation: ${fadeIn} 0.4s both 1s ease-out;
`

export default AppContainer
