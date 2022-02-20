import PropTypes from 'prop-types'
import Card from './Card'
import HeaderOne from './HeaderOne'
import ParagraphOne from './ParagraphOne'
import ImageIcon from './ImageIcon'

const CardThree = ({ appData }) => {
  return (
    <Card>
      <HeaderOne>{appData.HEADER_ONE}</HeaderOne>
      <ParagraphOne>{appData.PAR_ONE}</ParagraphOne>
      <ParagraphOne>{appData.PAR_TWO}</ParagraphOne>
      <ImageIcon alt="Icon" src={appData.IMG_ICON} title="Icon" />
    </Card>
  )
}

CardThree.propTypes = {
  appData: PropTypes.object.isRequired,
}

export default CardThree
