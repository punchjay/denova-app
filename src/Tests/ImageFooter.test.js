import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import ImageFooter from '../Components/ImageFooter'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ImageFooter />, div)
})

it('renders correctly', () => {
  const tree = renderer.create(<ImageFooter />)
  expect(tree).toMatchSnapshot()
})
