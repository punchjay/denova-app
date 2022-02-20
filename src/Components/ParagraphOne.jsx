import styled from 'styled-components'

const ParOne = styled.p`
  color: ${(props) => (props.leadIn ? '#fff' : 'b1b3b4')};
  font-size: 1.11rem;
  line-height: 1.67rem;
  margin: 0 auto;
  max-width: 43rem;
  text-align: center;
  padding: 0 0 1.875rem 0;
`

export default ParOne
