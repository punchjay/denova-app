import { useState, useEffect } from 'react'
import AppContainer from './AppContainer'
import Loader from './Loader'
import CardOne from './CardOne'
import CardTwo from './CardTwo'
import CardThree from './CardThree'
import Footer from './Footer'
import fetchApi from '../AppData/Api'

const App = () => {
  const [appData, setAppData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
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
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  if (isLoading) return <Loader />
  if (error) return <p style={{ color: '#fff', textAlign: 'center', padding: '2rem' }}>{error}</p>

  return (
    <AppContainer>
      <CardOne appData={appData[0]} />
      <CardTwo appData={appData[1]} />
      <CardThree appData={appData[2]} />
      <Footer appData={appData[3]} />
    </AppContainer>
  )
}

export default App
