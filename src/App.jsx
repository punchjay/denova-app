import AppContainer from './Components/AppContainer'
import CardOne from './Components/CardOne'
import CardTwo from './Components/CardTwo'
import CardThree from './Components/CardThree'
import Footer from './Components/Footer'
import { appData, imgData } from './AppData'

const App = () => {
  return (
    <AppContainer>
      <CardOne appData={appData.cardOne} />
      <CardTwo appData={appData.cardTwo} imgData={imgData} />
      <CardThree appData={appData.cardThree} />
      <Footer appData={appData.footer} />
    </AppContainer>
  )
}

export default App
