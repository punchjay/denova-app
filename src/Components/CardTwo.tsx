import Card from './Card'
import GalleryContainer from './GalleryContainer'
import HeaderOne from './HeaderOne'
import ParagraphOne from './ParagraphOne'
import Tooltip from './Tooltip'
import ToolGallery from './ToolGallery'
import ToolWrapper from './ToolWrapper'
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
          <ToolWrapper key={img.name}>
            <a
              href={img.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={img.name}
            >
              <ToolGallery
                alt={img.name}
                loading="lazy"
                src={require(`../AppData/Img/${img.image}.png`)}
              />
            </a>
            <Tooltip>{img.name}</Tooltip>
          </ToolWrapper>
        ))}
      </GalleryContainer>
      <ParagraphOne>{appData.PAR_ONE}</ParagraphOne>
    </Card>
  )
}

export default CardTwo
