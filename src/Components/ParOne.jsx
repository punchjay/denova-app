import styled from 'styled-components'
import PropTypes from 'prop-types'

const ParOne = styled.p`
  color: ${(props) => (props.leadIn ? '#fff' : 'b1b3b4')};
  font-size: 1.11rem;
  line-height: 1.67rem;
  margin: 0 auto;
  max-width: 60%;
  text-align: center;
  padding: 0 0 30px 0;
`

export default ParOne
