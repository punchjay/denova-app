import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import appData from '../AppData/AppData'
import Footer from '../Components/Footer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Footer appData={appData.footer} />, div)
})

it('renders correctly', () => {
  const tree = renderer.create(<Footer appData={appData.footer} />)
  expect(tree).toMatchSnapshot()
})
