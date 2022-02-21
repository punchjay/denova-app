import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import ImageGallery from '../Components/ImageGallery'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ImageGallery />, div)
})

it('renders correctly', () => {
  const tree = renderer.create(<ImageGallery />)
  expect(tree).toMatchSnapshot()
})
