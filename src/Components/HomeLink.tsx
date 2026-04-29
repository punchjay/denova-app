import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HomeLink = styled(Link)`
  color: #20bbfc;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 300;
  transition: filter 0.2s ease;
  filter: drop-shadow(0 0 6px #8b5cf6);
  &:hover {
    filter: drop-shadow(0 0 6px #20bbfc);
  }
  &:focus-visible {
    outline: 2px solid #20bbfc;
    outline-offset: 2px;
    border-radius: 2px;
  }
`

export default HomeLink
