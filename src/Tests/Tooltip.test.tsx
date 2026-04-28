import { render } from '@testing-library/react'
import Tooltip from '../Components/Tooltip'

it('renders without crashing', () => {
  render(<Tooltip />)
})

it('renders correctly', () => {
  const { asFragment } = render(<Tooltip />)
  expect(asFragment()).toMatchSnapshot()
})
