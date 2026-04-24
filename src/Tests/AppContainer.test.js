import { render } from '@testing-library/react'
import AppContainer from '../Components/AppContainer'

it('renders without crashing', () => {
  render(<AppContainer />)
})

it('renders correctly', () => {
  const { asFragment } = render(<AppContainer />)
  expect(asFragment()).toMatchSnapshot()
})
