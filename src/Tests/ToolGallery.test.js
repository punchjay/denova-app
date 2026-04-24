import { render } from '@testing-library/react'
import ToolGallery from '../Components/ToolGallery'

it('renders without crashing', () => {
  render(<ToolGallery />)
})

it('renders correctly', () => {
  const { asFragment } = render(<ToolGallery />)
  expect(asFragment()).toMatchSnapshot()
})
