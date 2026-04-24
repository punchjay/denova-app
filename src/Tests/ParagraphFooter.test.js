import { render } from '@testing-library/react'
import ParagraphFooter from '../Components/ParagraphFooter'

it('renders without crashing', () => {
  render(<ParagraphFooter />)
})

it('renders correctly', () => {
  const { asFragment } = render(<ParagraphFooter />)
  expect(asFragment()).toMatchSnapshot()
})
