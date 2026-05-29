import styled from 'styled-components'
import { colors } from './colors'

const LinkFooter = styled.a`
  color: ${colors.greyMid};
  text-decoration: none;
  transition: filter 0.2s ease;
  &:hover {
    filter: drop-shadow(0 0 6px ${colors.cyan});
  }
  &:focus-visible {
    outline: 2px solid ${colors.cyan};
    outline-offset: 2px;
    border-radius: 2px;
  }
`

export default LinkFooter
