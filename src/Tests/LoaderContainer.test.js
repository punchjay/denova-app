import { render } from '@testing-library/react'
import LoaderContainer from '../Components/LoaderContainer'

it('renders without crashing', () => {
  render(<LoaderContainer />)
})

it('renders correctly', () => {
  const { asFragment } = render(<LoaderContainer />)
  expect(asFragment()).toMatchSnapshot()
})
