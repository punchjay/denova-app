import AppContainer from './AppContainer'
import GhostCard from './GhostCard'
import HomeLink from './HomeLink'
import NotFoundHeader from './NotFoundHeader'
import ScrollReveal from './ScrollReveal'
import StarBackground from './StarBackground'

const NotFound = () => (
  <>
    <StarBackground />
    <AppContainer>
      <ScrollReveal>
        <GhostCard>
          <NotFoundHeader>404</NotFoundHeader>
          <HomeLink to="/">← Back to home</HomeLink>
        </GhostCard>
      </ScrollReveal>
    </AppContainer>
  </>
)

export default NotFound
