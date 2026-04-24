import { render } from '@testing-library/react'
import ImageGallery from '../Components/ImageGallery'

it('renders without crashing', () => {
  render(<ImageGallery />)
})

it('renders correctly', () => {
  const { asFragment } = render(<ImageGallery />)
  expect(asFragment()).toMatchSnapshot()
})
