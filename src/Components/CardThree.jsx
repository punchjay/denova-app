import PropTypes from 'prop-types'
import Card from './Card'
import HeaderOne from './HeaderOne'
import ParagraphOne from './ParagraphOne'
import ImageIcon from './ImageIcon'

const CardThree = ({ appData }) => {
  return (
    <Card>
      <HeaderOne>{appData.HEADER_THREE}</HeaderOne>
      <ParagraphOne>{appData.PAR_FOUR}</ParagraphOne>
      <ParagraphOne>{appData.PAR_FIVE}</ParagraphOne>
      <ImageIcon alt="Icon" src={appData.IMG_TOOL} title="Icon" />
    </Card>
  )
}

CardThree.propTypes = {
  appData: PropTypes.object.isRequired,
}

export default CardThree
