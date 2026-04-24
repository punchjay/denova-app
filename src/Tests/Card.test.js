import { render } from '@testing-library/react'
import Card from '../Components/Card'

it('renders without crashing', () => {
  render(<Card />)
})

it('renders correctly', () => {
  const { asFragment } = render(<Card />)
  expect(asFragment()).toMatchSnapshot()
})
