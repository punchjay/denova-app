import AppContainer from './Components/AppContainer'
import Loader from './Components/Loader'
import CardOne from './Components/CardOne'
import CardTwo from './Components/CardTwo'
import Footer from './Components/Footer'
import appData from './AppData/AppData'

const App = () => {
  return (
    <>
      {!appData && (
        <AppContainer>
          <Loader />
        </AppContainer>
      )}
      {appData && (
        <AppContainer>
          <CardOne appData={appData.cardOne} />
          <CardTwo appData={appData.cardTwo} />
          <CardOne appData={appData.cardThree} />
          <Footer appData={appData.footer} />
        </AppContainer>
      )}
    </>
  )
}

export default App
