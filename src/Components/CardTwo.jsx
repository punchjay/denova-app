import PropTypes from 'prop-types'
import Card from './Card'
import HeaderOne from './HeaderOne'
import ParagraphOne from './ParagraphOne'
import ImageIcon from './ImageIcon'

const CardTwo = ({ appData }) => {
  return (
    <Card>
      <HeaderOne>{appData.HEADER_TWO}</HeaderOne>
      <ParagraphOne>{appData.PAR_THREE}</ParagraphOne>
      <ImageIcon src={appData.GEAR_IMG} />
    </Card>
  )
}

CardTwo.propTypes = {
  appData: PropTypes.object.isRequired,
}

export default CardTwo
