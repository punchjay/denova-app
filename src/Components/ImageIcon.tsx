import styled from 'styled-components'

const ImageIcon = styled.img<{ $loaded?: boolean }>`
  width: 10rem;
  border-radius: 50%;
  border: 3px solid #20bbfc;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  cursor: pointer;
  transition:
    opacity 1.2s ease,
    filter 0.2s ease;
  filter: drop-shadow(0 0 6px #8b5cf6);
  &:hover {
    filter: drop-shadow(0 0 6px #20bbfc);
  }
`
export default ImageIcon
