import SectionContainer from './Components/SectionContainer'
import AppContainer from './Components/AppContainer'
import constant from './Constants'

const App = () => {
  return (
    <AppContainer>
      <SectionContainer appData={constant} />
    </AppContainer>
  )
}

export default App
