import { render } from '@testing-library/react'
import NotFoundHeader from '../Components/NotFoundHeader'

it('renders without crashing', () => {
  render(<NotFoundHeader />)
})

it('renders correctly', () => {
  const { asFragment } = render(<NotFoundHeader />)
  expect(asFragment()).toMatchSnapshot()
})
