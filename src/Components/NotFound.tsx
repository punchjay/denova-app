import AppContainer from './AppContainer'
import Card from './Card'
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
          <HeaderOne>404</HeaderOne>
          <ParagraphOne>Page not found.</ParagraphOne>
          <HomeLink to="/">← Back to home</HomeLink>
        </Card>
      </ScrollReveal>
    </AppContainer>
  </>
)

export default NotFound
