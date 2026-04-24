import { render } from '@testing-library/react'
import GalleryContainer from '../Components/GalleryContainer'

it('renders without crashing', () => {
  render(<GalleryContainer />)
})

it('renders correctly', () => {
  const { asFragment } = render(<GalleryContainer />)
  expect(asFragment()).toMatchSnapshot()
})
