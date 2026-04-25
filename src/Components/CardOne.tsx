import Card from './Card'
import HeaderOne from './HeaderOne'
import ParagraphOne from './ParagraphOne'
import ImageIcon from './ImageIcon'
import type { CardOneData } from '../AppData/types'

interface Props {
  appData: CardOneData
}

const CardOne = ({ appData }: Props) => {
  return (
    <Card>
      <HeaderOne>{appData.HEADER_ONE}</HeaderOne>
      <ParagraphOne $leadIn={appData.LEAD_IN}>{appData.PAR_ONE}</ParagraphOne>
      <ParagraphOne>{appData.PAR_TWO}</ParagraphOne>
      <ImageIcon
        alt="Skills gear icon"
        src={require(`../AppData/Img/${appData.IMG_ICON}.png`)}
        title="Skills gear icon"

      />
    </Card>
  )
}

export default CardOne
