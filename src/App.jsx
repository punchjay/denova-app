import { useState, useEffect } from 'react'
import AppContainer from './Components/AppContainer'
import Loader from './Components/Loader'
import CardOne from './Components/CardOne'
import CardTwo from './Components/CardTwo'
import Footer from './Components/Footer'
import { appData as data } from './AppData/AppData'

const App = () => {
  const [appData, setAppData] = useState(null)
  const [isloading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getAppData = () => {
      try {
        const response = data
        setAppData(response)
        setError(null)
      } catch (err) {
        setError(err.message)
        console.error(error)
        setAppData(null)
      } finally {
        setLoading(false)
      }
    }
    getAppData()
  }, [])

  return (
    <>
      {isloading ? (
        <AppContainer>
          <Loader />
        </AppContainer>
      ) : (
        <AppContainer>
          <CardOne appData={appData[0]} />
          <CardTwo appData={appData[1]} />
          <CardOne appData={appData[2]} />
          <Footer appData={appData[3]} />
        </AppContainer>
      )}
    </>
  )
}

export default App
