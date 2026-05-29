import styled from 'styled-components'
import { colors } from './colors'

const ImageIcon = styled.img<{ $loaded?: boolean }>`
  width: 10rem;
  border-radius: 50%;
  border: 3px solid ${colors.cyan};
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  cursor: pointer;
  transition:
    opacity 1.2s ease,
    filter 0.2s ease;
  filter: drop-shadow(0 0 6px ${colors.purple});
  &:hover {
    filter: drop-shadow(0 0 6px ${colors.cyan});
  }
`
export default ImageIcon
