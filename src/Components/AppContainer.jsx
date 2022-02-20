import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const AppContainer = styled.div`
  background: #1b1e22;
  color: #b1b3b4;
  text-align: center;
  margin: 0;
  padding: 7rem 0 3rem;
  position: relative;
  white-space: normal;
  animation: ${fadeIn} 0.8s both 1s ease-out;
`

export default AppContainer
