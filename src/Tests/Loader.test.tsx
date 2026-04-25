import { render } from '@testing-library/react'
import Loader from '../Components/Loader'

it('renders without crashing', () => {
  render(<Loader />)
})

it('renders correctly', () => {
  const { asFragment } = render(<Loader />)
  expect(asFragment()).toMatchSnapshot()
})
