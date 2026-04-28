import styled from 'styled-components'

const LinkFooter = styled.a`
  color: #b1b3b4;
  text-decoration: none;
  transition: color 0.2s ease;
  &:hover {
    color: #d8b4fe;
  }
  &:focus-visible {
    outline: 2px solid #d8b4fe;
    outline-offset: 2px;
    border-radius: 2px;
  }
`

export default LinkFooter
