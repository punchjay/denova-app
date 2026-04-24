import { render } from '@testing-library/react'
import LinkFooter from '../Components/LinkFooter'

it('renders without crashing', () => {
  render(<LinkFooter />)
})

it('renders correctly', () => {
  const { asFragment } = render(<LinkFooter />)
  expect(asFragment()).toMatchSnapshot()
})
