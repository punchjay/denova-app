import styled from 'styled-components'

const ImageFooter = styled.img`
  margin: 0 0 0.15rem 0.5rem;
  width: 1.35rem;
  max-width: 100%;
  vertical-align: middle;
  transition: filter 0.2s ease;
  &:hover {
    filter: drop-shadow(0 0 6px #8b5cf6);
  }
`

export default ImageFooter
