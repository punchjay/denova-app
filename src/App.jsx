import React, { useState } from 'react'
import AppContainer from './Components/AppContainer'
import Loader from './Components/Loader'
import CardOne from './Components/CardOne'
import CardTwo from './Components/CardTwo'
import Footer from './Components/Footer'
import appData from './AppData/AppData'

const App = () => {
  return (
    <>
      {!appData.length ? (
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
