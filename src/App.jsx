import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from './Components/Header'
import ParOne from './Components/ParOne'
import constant from './Constants'
import Gear from './Img/gear.png'

const App = () => {
  return (
    <Container>
      <SectionContainer>
        <Header>{constant.HEADER_ONE}</Header>
        <ParOne leadIn>{constant.PAR_ONE}</ParOne>
        <ParOne>{constant.PAR_TWO}</ParOne>
        <img src={Gear} width="100" />
      </SectionContainer>
    </Container>
  )
}

const Container = styled.div`
  background: #1b1e22;
  color: #b1b3b4;
  text-align: center;
  margin: 0;
  padding: 150px 0 50px;
  //overflow: hidden;
  position: relative;
  white-space: normal;
  //z-index: 100;
  //height: auto;
`

const SectionContainer = styled.div``

export default App
