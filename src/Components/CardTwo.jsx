import PropTypes from 'prop-types'
import Card from './Card'
import HeaderOne from './HeaderOne'
import ParagraphOne from './ParagraphOne'
import GalleryContainer from './GalleryContainer'
import ImageGallery from './ImageGallery'

const CardTwo = ({ appData, imgData }) => {
  return (
    <Card>
      <HeaderOne>{appData.HEADER_TWO}</HeaderOne>
      <ParagraphOne>{appData.PAR_THREE}</ParagraphOne>
      <GalleryContainer>
        {imgData.map((img, index) => (
          <ImageGallery alt={img} key={index} src={img} title={img} />
        ))}
      </GalleryContainer>
    </Card>
  )
}

CardTwo.propTypes = {
  appData: PropTypes.object.isRequired,
  imgData: PropTypes.array.isRequired,
}

export default CardTwo
