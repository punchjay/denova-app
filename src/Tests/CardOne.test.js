import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import appData from '../AppData/AppData'
import CardOne from '../Components/CardOne'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CardOne appData={appData.cardOne} />, div)
})

it('renders correctly', () => {
  const tree = renderer.create(<CardOne appData={appData.cardOne} />)
  expect(tree).toMatchSnapshot()
})
