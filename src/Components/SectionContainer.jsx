import PropTypes from 'prop-types'
import HeaderOne from './HeaderOne'
import ParagraphOne from './ParagraphOne'
import ImageIcon from './ImageIcon'

const SectionContainer = ({ appData }) => {
  return (
    <>
      <HeaderOne>{appData.HEADER_ONE}</HeaderOne>
      <ParagraphOne leadIn>{appData.PAR_ONE}</ParagraphOne>
      <ParagraphOne>{appData.PAR_TWO}</ParagraphOne>
      <ImageIcon src={appData.GEAR_IMG} />
    </>
  )
}

SectionContainer.propTypes = {
  appData: PropTypes.object.isRequired,
}

export default SectionContainer
