import { useState, useEffect } from 'react'
import AppContainer from './Components/AppContainer'
import Loader from './Components/Loader'
import CardOne from './Components/CardOne'
import CardTwo from './Components/CardTwo'
import Footer from './Components/Footer'
import fetchApi from './AppData/Api'

const App = () => {
  const [appData, setAppData] = useState(null)
  const [isloading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    ;(async () => {
      try {
        const data = await fetchApi()
        setAppData(data)
        setError(null)
      } catch (err) {
        setAppData(null)
        setError(err.message)
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  return (
    <>
      {isloading ? (
        <Loader />
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
