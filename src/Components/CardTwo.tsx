import Card from './Card'
import HeaderOne from './HeaderOne'
import ParagraphOne from './ParagraphOne'
import GalleryContainer from './GalleryContainer'
import ToolGallery from './ToolGallery'
import type { CardTwoData } from '../AppData/types'

interface Props {
  appData: CardTwoData
}

const CardTwo = ({ appData }: Props) => {
  return (
    <Card>
      <HeaderOne>{appData.HEADER_ONE}</HeaderOne>
      <GalleryContainer>
        {appData.GALLERY_DATA.map((img) => (
          <ToolGallery
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

export default CardTwo
