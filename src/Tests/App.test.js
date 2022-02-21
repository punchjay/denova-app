import ReactDOM from 'react-dom'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import App from '../App'

test('renders intro text', () => {
  render(<App />)
  const textElement = screen.getByText(
    /Software Developer, Building and Maintaining React Apps/i,
  )
  expect(textElement).toBeInTheDocument()
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

it('renders correctly', () => {
  const tree = renderer.create(<App />)
  expect(tree).toMatchSnapshot()
})
