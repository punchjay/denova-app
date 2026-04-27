import { use, Suspense } from 'react'
import AppContainer from './AppContainer'
import Loader from './Loader'
import CardOne from './CardOne'
import CardTwo from './CardTwo'
import CardThree from './CardThree'
import Footer from './Footer'
import ErrorBoundary from './ErrorBoundary'
import StarBackground from './StarBackground'
import ScrollReveal from './ScrollReveal'
import fetchApi from '../AppData/Api'

const appDataPromise = fetchApi()

const AppContent = () => {
  const appData = use(appDataPromise)
  return (
    <AppContainer>
      <ScrollReveal>
        <CardOne appData={appData[0]} />
      </ScrollReveal>
      <ScrollReveal delay={150}>
        <CardTwo appData={appData[1]} />
      </ScrollReveal>
      <ScrollReveal>
        <CardThree appData={appData[2]} />
      </ScrollReveal>
      <ScrollReveal>
        <Footer appData={appData[3]} />
      </ScrollReveal>
    </AppContainer>
  )
}

const App = () => (
  <>
    <StarBackground />
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <AppContent />
      </Suspense>
    </ErrorBoundary>
  </>
)

export default App
