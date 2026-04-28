import { render, screen, fireEvent } from '@testing-library/react'
import Lightbox from '../Components/Lightbox'

const props = {
  src: 'test.png',
  alt: 'Test Project',
  onClose: vi.fn(),
}

beforeEach(() => {
  props.onClose.mockClear()
})

it('renders without crashing', () => {
  render(<Lightbox {...props} />)
})

it('renders correctly', () => {
  const { asFragment } = render(<Lightbox {...props} />)
  expect(asFragment()).toMatchSnapshot()
})

it('calls onClose when backdrop is clicked', () => {
  render(<Lightbox {...props} />)
  fireEvent.click(screen.getByTestId('lightbox-backdrop'))
  expect(props.onClose).toHaveBeenCalledTimes(1)
})

it('calls onClose when Escape is pressed', () => {
  render(<Lightbox {...props} />)
  fireEvent.keyDown(document, { key: 'Escape' })
  expect(props.onClose).toHaveBeenCalledTimes(1)
})

it('does not close when the image area is clicked', () => {
  render(<Lightbox {...props} />)
  fireEvent.click(screen.getByAltText('Test Project'))
  expect(props.onClose).not.toHaveBeenCalled()
})
