import { render } from '@testing-library/react'
import ImageFooter from '../Components/ImageFooter'

it('renders without crashing', () => {
  render(<ImageFooter />)
})

it('renders correctly', () => {
  const { asFragment } = render(<ImageFooter />)
  expect(asFragment()).toMatchSnapshot()
})
