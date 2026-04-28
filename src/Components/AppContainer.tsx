import styled from 'styled-components'

const AppContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 3rem 1rem;
  background: transparent;
  color: #b1b3b4;
  text-align: center;
  @media (min-width: 768px) {
    padding-top: 5rem;
  }
`

export default AppContainer
