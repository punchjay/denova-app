import Card from './Card'
import GalleryContainer from './GalleryContainer'
import HeaderOne from './HeaderOne'
import ParagraphOne from './ParagraphOne'
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
          <a
            key={img.name}
            href={img.url}
            target="_blank"
            rel="noreferrer"
            aria-label={img.name}
          >
            <ToolGallery
              alt={img.name}
              loading="lazy"
              src={require(`../AppData/Img/${img.image}.png`)}
              title={img.name}
            />
          </a>
        ))}
      </GalleryContainer>
      <ParagraphOne>{appData.PAR_ONE}</ParagraphOne>
    </Card>
  )
}

export default CardTwo
