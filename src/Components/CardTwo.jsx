import PropTypes from 'prop-types'
import Card from './Card'
import HeaderOne from './HeaderOne'
import ParagraphOne from './ParagraphOne'
import GalleryContainer from './GalleryContainer'
import ToolGallery from './ToolGallery'

const CardTwo = ({ appData }) => {
  return (
    <Card>
      <HeaderOne>{appData.HEADER_ONE}</HeaderOne>
      <GalleryContainer>
        {appData.GALLERY_DATA.map((img) => (
          <ToolGallery
            alt={img.name}
            key={img.name}
            src={require(`../AppData/Img/${img.image}.png`)}
            title={img.name}
          />
        ))}
      </GalleryContainer>
      <ParagraphOne>{appData.PAR_ONE}</ParagraphOne>
    </Card>
  )
}

CardTwo.propTypes = {
  appData: PropTypes.object.isRequired,
}

export default CardTwo
