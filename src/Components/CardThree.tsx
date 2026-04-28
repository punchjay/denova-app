import Card from './Card'
import GalleryContainer from './GalleryContainer'
import HeaderOne from './HeaderOne'
import ImageGallery from './ImageGallery'
import ParagraphOne from './ParagraphOne'
import type { CardThreeData } from '../AppData/types'

interface Props {
  appData: CardThreeData
}

const CardThree = ({ appData }: Props) => {
  return (
    <Card>
      <HeaderOne>{appData.HEADER_ONE}</HeaderOne>
      <GalleryContainer>
        {appData.GALLERY_DATA.map((img) => (
          <ImageGallery
            alt={img.name}
            key={img.name}
            loading="lazy"
            src={require(`../AppData/Img/${img.image}.png`)}
            title={img.name}
          />
        ))}
      </GalleryContainer>
      <ParagraphOne>{appData.PAR_ONE}</ParagraphOne>
    </Card>
  )
}

export default CardThree
