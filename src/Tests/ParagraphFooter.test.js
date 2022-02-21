import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import ParagraphFooter from '../Components/ParagraphFooter'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ParagraphFooter />, div)
})

it('renders correctly', () => {
  const tree = renderer.create(<ParagraphFooter />)
  expect(tree).toMatchSnapshot()
})
