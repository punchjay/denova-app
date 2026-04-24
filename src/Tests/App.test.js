import { render } from '@testing-library/react'
import App from '../Components/App'

it('renders without crashing', () => {
  render(<App />)
})

it('renders correctly', () => {
  const { asFragment } = render(<App />)
  expect(asFragment()).toMatchSnapshot()
})
