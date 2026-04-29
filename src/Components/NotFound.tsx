import { notFoundData } from '../AppData/AppData'
import AppContainer from './AppContainer'
import GhostCard from './GhostCard'
import HeaderOne from './HeaderOne'
import HomeLink from './HomeLink'
import ScrollReveal from './ScrollReveal'
import StarBackground from './StarBackground'

const NotFound = () => (
  <>
    <StarBackground />
    <AppContainer>
      <ScrollReveal>
        <GhostCard>
          <HeaderOne>{notFoundData.HEADER_ONE}</HeaderOne>
          <HomeLink to="/">← Back to home</HomeLink>
        </GhostCard>
      </ScrollReveal>
    </AppContainer>
  </>
)

export default NotFound
