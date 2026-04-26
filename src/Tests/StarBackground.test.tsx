import { render } from '@testing-library/react'
import StarBackground from '../Components/StarBackground'

it('renders without crashing', () => {
  render(<StarBackground />)
})

it('renders correctly', () => {
  const { asFragment } = render(<StarBackground />)
  expect(asFragment()).toMatchSnapshot()
})
