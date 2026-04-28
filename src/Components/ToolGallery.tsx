import styled from 'styled-components'

const ToolGallery = styled.img`
  margin: 0.625rem 0.3rem 0 0.3rem;
  width: 4rem;
  max-width: 100%;
  transition: filter 0.2s ease;
  &:hover {
    filter: drop-shadow(0 0 6px #8b5cf6);
  }
`

export default ToolGallery
