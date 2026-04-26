import { render } from '@testing-library/react'
import StarBackground from '../Components/StarBackground'

beforeEach(() => {
  vi.spyOn(Math, 'random').mockReturnValue(0.5)
})

afterEach(() => {
  vi.restoreAllMocks()
})

it('renders without crashing', () => {
  render(<StarBackground />)
})

it('renders correctly', () => {
  const { asFragment } = render(<StarBackground />)
  expect(asFragment()).toMatchSnapshot()
})
