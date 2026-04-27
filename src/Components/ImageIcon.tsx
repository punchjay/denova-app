import styled from 'styled-components'

const ImageIcon = styled.img<{ $loaded?: boolean }>`
  width: 10rem;
  border-radius: 50%;
  border: 3px solid #20bbfc;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  transition: opacity 1.2s ease;
`
export default ImageIcon
