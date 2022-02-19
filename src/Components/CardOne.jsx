import PropTypes from 'prop-types'
import Card from './Card'
import HeaderOne from './HeaderOne'
import ParagraphOne from './ParagraphOne'
import ImageIcon from './ImageIcon'

const CardOne = ({ appData }) => {
  return (
    <Card>
      <HeaderOne>{appData.HEADER_ONE}</HeaderOne>
      <ParagraphOne leadIn>{appData.PAR_ONE}</ParagraphOne>
      <ParagraphOne>{appData.PAR_TWO}</ParagraphOne>
      <ImageIcon src={appData.IMG_GEAR} />
    </Card>
  )
}

CardOne.propTypes = {
  appData: PropTypes.object.isRequired,
}

export default CardOne
