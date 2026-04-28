import { render } from '@testing-library/react'
import ToolWrapper from '../Components/ToolWrapper'

it('renders without crashing', () => {
  render(<ToolWrapper />)
})

it('renders correctly', () => {
  const { asFragment } = render(<ToolWrapper />)
  expect(asFragment()).toMatchSnapshot()
})
