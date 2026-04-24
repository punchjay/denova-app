import { render } from '@testing-library/react'
import ParagraphOne from '../Components/ParagraphOne'

it('renders without crashing', () => {
  render(<ParagraphOne />)
})

it('renders correctly', () => {
  const { asFragment } = render(<ParagraphOne />)
  expect(asFragment()).toMatchSnapshot()
})
