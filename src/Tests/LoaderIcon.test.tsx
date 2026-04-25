import { render } from '@testing-library/react'
import LoaderIcon from '../Components/LoaderIcon'

it('renders without crashing', () => {
  render(<LoaderIcon />)
})

it('renders correctly', () => {
  const { asFragment } = render(<LoaderIcon />)
  expect(asFragment()).toMatchSnapshot()
})
