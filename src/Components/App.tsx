import { use, Suspense } from 'react'
import AppContainer from './AppContainer'
import Loader from './Loader'
import CardOne from './CardOne'
import CardTwo from './CardTwo'
import CardThree from './CardThree'
import Footer from './Footer'
import ErrorBoundary from './ErrorBoundary'
import StarBackground from './StarBackground'
import fetchApi from '../AppData/Api'

const appDataPromise = fetchApi()

const AppContent = () => {
  const appData = use(appDataPromise)
  return (
    <AppContainer>
      <CardOne appData={appData[0]} />
      <CardTwo appData={appData[1]} />
      <CardThree appData={appData[2]} />
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
