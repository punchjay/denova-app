import AppContainer from './Components/AppContainer'
import CardOne from './Components/CardOne'
import CardTwo from './Components/CardTwo'
import CardThree from './Components/CardThree'
import data from './Constants'

const App = () => {
  return (
    <AppContainer>
      <CardOne appData={data} />
      <CardTwo appData={data} />
      <CardThree appData={data} />
    </AppContainer>
  )
}

export default App
