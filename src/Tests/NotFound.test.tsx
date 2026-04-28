import { renderWithRouter } from './test-utils'
import NotFound from '../Components/NotFound'

vi.spyOn(Math, 'random').mockReturnValue(0.5)

it('renders without crashing', () => {
  renderWithRouter(<NotFound />)
})

it('renders correctly', () => {
  const { asFragment } = renderWithRouter(<NotFound />)
  expect(asFragment()).toMatchSnapshot()
})
