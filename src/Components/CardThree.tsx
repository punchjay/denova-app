import { useState } from 'react'
import styled from 'styled-components'
import Card from './Card'
import GalleryContainer from './GalleryContainer'
import HeaderOne from './HeaderOne'
import ImageGallery from './ImageGallery'
import Lightbox from './Lightbox'
import ParagraphOne from './ParagraphOne'
import type { CardThreeData } from '../AppData/types'

const ClickableImage = styled(ImageGallery)`
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0 0 8px #20bbfc);
  }
`

interface Props {
  appData: CardThreeData
}

const CardThree = ({ appData }: Props) => {
  const [active, setActive] = useState<{ src: string; alt: string } | null>(null)

  return (
    <Card>
      <HeaderOne>{appData.HEADER_ONE}</HeaderOne>
      <GalleryContainer>
        {appData.GALLERY_DATA.map((img) => {
          const src = require(`../AppData/Img/${img.image}.png`)
          return (
            <ClickableImage
              alt={img.name}
              key={img.name}
              loading="lazy"
              src={src}
              title={img.name}
              onClick={() => setActive({ src, alt: img.name })}
            />
          )
        })}
      </GalleryContainer>
      <ParagraphOne>{appData.PAR_ONE}</ParagraphOne>
      {active && <Lightbox src={active.src} alt={active.alt} onClose={() => setActive(null)} />}
    </Card>
  )
}

export default CardThree
