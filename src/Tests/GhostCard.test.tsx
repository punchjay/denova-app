import { render } from '@testing-library/react'
import GhostCard from '../Components/GhostCard'

it('renders without crashing', () => {
  render(<GhostCard />)
})

it('renders correctly', () => {
  const { asFragment } = render(<GhostCard />)
  expect(asFragment()).toMatchSnapshot()
})
