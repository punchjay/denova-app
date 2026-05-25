import { use, Suspense } from 'react'
import AppContainer from './AppContainer'
import CardOne from './CardOne'
import CardTwo from './CardTwo'
import CardThree from './CardThree'
import ErrorBoundary from './ErrorBoundary'
import Footer from './Footer'
import Loader from './Loader'
import ScrollReveal from './ScrollReveal'
import StarBackground from './StarBackground'
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
      <Footer appData={appData[3]} />
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
