import PropTypes from 'prop-types'
import styled from 'styled-components'

const ParagraphOne = styled.p`
  margin: 0 auto;
  padding: 0 0 1.875rem 0;
  max-width: 43rem;
  font-size: 1.11rem;
  font-weight: 300;
  line-height: 1.67rem;
  color: ${(props) => (props.leadIn ? '#fff' : 'b1b3b4')};
`

ParagraphOne.propTypes = {
  appData: PropTypes.bool,
}

export default ParagraphOne
