import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import appData from '../AppData/AppData'
import CardTwo from '../Components/CardTwo'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CardTwo appData={appData.cardTwo} />, div)
})

it('renders correctly', () => {
  const tree = renderer.create(<CardTwo appData={appData.cardTwo} />)
  expect(tree).toMatchSnapshot()
})
