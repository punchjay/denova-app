import styled from 'styled-components'

const LinkFooter = styled.a`
  color: #b1b3b4;
  text-decoration: none;
  transition: filter 0.2s ease;
  &:hover {
    filter: drop-shadow(0 0 6px #20bbfc);
  }
  &:focus-visible {
    outline: 2px solid #20bbfc;
    outline-offset: 2px;
    border-radius: 2px;
  }
`

export default LinkFooter
