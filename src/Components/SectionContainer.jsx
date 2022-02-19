import PropTypes from 'prop-types'
import Header from './Header'
import ParOne from './ParOne'
import Image from './Image'

const SectionContainer = ({ appData }) => {
  return (
    <>
      <Header>{appData.HEADER_ONE}</Header>
      <ParOne leadIn>{appData.PAR_ONE}</ParOne>
      <ParOne>{appData.PAR_TWO}</ParOne>
      <Image src={appData.GEAR_IMG} />
    </>
  )
}

SectionContainer.propTypes = {
  appData: PropTypes.object.isRequired,
}

export default SectionContainer
