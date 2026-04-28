import { notFoundData } from '../AppData/AppData'
import AppContainer from './AppContainer'
import Card from './Card'
import FourOFourImage from './FourOFourImage'
import HeaderOne from './HeaderOne'
import HomeLink from './HomeLink'
import ParagraphOne from './ParagraphOne'
import ScrollReveal from './ScrollReveal'
import StarBackground from './StarBackground'

const NotFound = () => (
  <>
    <StarBackground />
    <AppContainer>
      <ScrollReveal>
        <Card>
          <FourOFourImage
            alt={notFoundData.ALT}
            src={require(`../AppData/Img/${notFoundData.IMAGE}.png`)}
          />
          <HeaderOne>{notFoundData.HEADER_ONE}</HeaderOne>
          <ParagraphOne>{notFoundData.ALT}</ParagraphOne>
          <HomeLink to="/">← Back to home</HomeLink>
        </Card>
      </ScrollReveal>
    </AppContainer>
  </>
)

export default NotFound
