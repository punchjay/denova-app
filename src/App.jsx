import { useState, useEffect } from 'react'
import AppContainer from './Components/AppContainer'
import Loader from './Components/Loader'
import CardOne from './Components/CardOne'
import CardTwo from './Components/CardTwo'
import Footer from './Components/Footer'

const App = () => {
  const [appData, setAppData] = useState(null)
  const [isloading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://1f932751-aee9-4df3-960c-1f7023b4cb31.mock.pstmn.io/v1/app-data`,
        )
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`,
          )
        }
        let appData = await response.json()
        setAppData(appData)
        setError(null)
      } catch (err) {
        setError(err.message)
        console.error(error)
        setAppData(null)
      } finally {
        setLoading(false)
      }
    }
    getData()
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
