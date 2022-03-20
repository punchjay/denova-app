import PropTypes from 'prop-types'
import Card from './Card'
import HeaderOne from './HeaderOne'
import ParagraphOne from './ParagraphOne'
import GalleryContainer from './GalleryContainer'
import ImageGallery from './ImageGallery'

const CardThree = ({ appData }) => {
  return (
    <Card>
      <HeaderOne>{appData.HEADER_ONE}</HeaderOne>
      <ParagraphOne>{appData.PAR_ONE}</ParagraphOne>
      <GalleryContainer>
        {appData.GALLERY_DATA.map((img) => (
          <ImageGallery
            alt={img.name}
            key={img.name}
            src={require(`../AppData/Img/${img.image}.png`)}
            title={img.name}
          />
        ))}
      </GalleryContainer>
    </Card>
  )
}

CardThree.propTypes = {
  appData: PropTypes.object.isRequired,
}

export default CardThree
