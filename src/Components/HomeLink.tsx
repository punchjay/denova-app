import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from './colors'

const HomeLink = styled(Link)`
  color: ${colors.cyan};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 300;
  transition: filter 0.2s ease;
  filter: drop-shadow(0 0 6px ${colors.purple});
  &:hover {
    filter: drop-shadow(0 0 6px ${colors.cyan});
  }
  &:focus-visible {
    outline: 2px solid ${colors.cyan};
    outline-offset: 2px;
    border-radius: 2px;
  }
`

export default HomeLink
