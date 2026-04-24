import { render } from '@testing-library/react'
import HeaderOne from '../Components/HeaderOne'

it('renders without crashing', () => {
  render(<HeaderOne />)
})

it('renders correctly', () => {
  const { asFragment } = render(<HeaderOne />)
  expect(asFragment()).toMatchSnapshot()
})
