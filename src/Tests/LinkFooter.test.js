import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import LinkFooter from '../Components/LinkFooter'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LinkFooter />, div)
})

it('renders correctly', () => {
  const tree = renderer.create(<LinkFooter />)
  expect(tree).toMatchSnapshot()
})
