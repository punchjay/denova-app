import LoaderContainer from './LoaderContainer'
import LoaderIcon from './LoaderIcon'
import ParagraphOne from './ParagraphOne'
import gear from '../AppData/Img/gear.png'

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderIcon alt="Loading" src={gear} title="Loading" />
      <ParagraphOne $leadIn>Loading...</ParagraphOne>
    </LoaderContainer>
  )
}

export default Loader
