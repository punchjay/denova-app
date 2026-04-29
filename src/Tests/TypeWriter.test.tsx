import { render } from '@testing-library/react'
import TypeWriter from '../Components/TypeWriter'

it('renders without crashing', () => {
  render(<TypeWriter text="Hello" />)
})

it('renders correctly', () => {
  const { asFragment } = render(<TypeWriter text="Hello" />)
  expect(asFragment()).toMatchSnapshot()
})
