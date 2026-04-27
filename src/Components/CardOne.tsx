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
        alt={appData.PROFILE_NAME}
        src={appData.PROFILE_IMG}
        title={appData.PROFILE_NAME}
      />
    </Card>
  )
}

export default CardOne
