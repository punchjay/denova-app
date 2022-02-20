import PropTypes from 'prop-types'
import Card from './Card'
import HeaderOne from './HeaderOne'
import ParagraphOne from './ParagraphOne'
import GalleryContainer from './GalleryContainer'
import ImageGallery from './ImageGallery'

const CardTwo = ({ appData }) => {
  return (
    <Card>
      <HeaderOne>{appData.HEADER_TWO}</HeaderOne>
      <ParagraphOne>{appData.PAR_THREE}</ParagraphOne>
      <GalleryContainer>
        {appData.GALLERY_DATA.map((img) => (
          <ImageGallery
            alt={img.name}
            key={img.name}
            src={img.image}
            title={img.name}
          />
        ))}
      </GalleryContainer>
    </Card>
  )
}

CardTwo.propTypes = {
  appData: PropTypes.object.isRequired,
}

export default CardTwo
