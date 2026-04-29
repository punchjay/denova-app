import { useState } from 'react'
import Card from './Card'
import HeroLayout from './HeroLayout'
import HeaderOne from './HeaderOne'
import ImageIcon from './ImageIcon'
import ParagraphOne from './ParagraphOne'
import TextContent from './TextContent'
import TypeWriter from './TypeWriter'
import type { CardOneData } from '../AppData/types'

interface Props {
  appData: CardOneData
}

const CardOne = ({ appData }: Props) => {
  const [imgLoaded, setImgLoaded] = useState(false)
  return (
    <Card>
      <HeroLayout>
        <TextContent>
          <HeaderOne><TypeWriter text={appData.HEADER_ONE} /></HeaderOne>
          <ParagraphOne $leadIn={appData.LEAD_IN}>
            {appData.PAR_ONE}
          </ParagraphOne>
          <ParagraphOne>{appData.PAR_TWO}</ParagraphOne>
        </TextContent>
        <a href={appData.GITHUB_LINK} target="_blank" rel="noreferrer" aria-label="GitHub profile">
          <ImageIcon
            alt={appData.PROFILE_NAME}
            src={require(`../AppData/Img/${appData.PROFILE_IMG}.png`)}
            title={appData.PROFILE_NAME}
            $loaded={imgLoaded}
            onLoad={() => setImgLoaded(true)}
          />
        </a>
      </HeroLayout>
    </Card>
  )
}

export default CardOne
