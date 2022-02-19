import styled from 'styled-components'
import PropTypes from 'prop-types'

const HeaderOne = ({ children }) => {
  return <Header>{children}</Header>
}

const Header = styled.h1`
  font-size: 2.4rem;
  line-height: 2.4rem;
  font-weight: 300;
  color: #20bbfc;
  margin: 0 auto;
  padding: 0 0 30px 0;
`

HeaderOne.propTypes = {
  children: PropTypes.string.isRequired,
}

export default HeaderOne
