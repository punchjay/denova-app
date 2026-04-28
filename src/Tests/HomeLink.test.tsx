import { renderWithRouter } from './test-utils'
import HomeLink from '../Components/HomeLink'

it('renders without crashing', () => {
  renderWithRouter(<HomeLink to="/">← Back to home</HomeLink>)
})

it('renders correctly', () => {
  const { asFragment } = renderWithRouter(<HomeLink to="/">← Back to home</HomeLink>)
  expect(asFragment()).toMatchSnapshot()
})
