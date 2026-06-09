import { render } from '@testing-library/react'
import { act } from 'react'
import App from '../Components/App'

beforeEach(() => {
  vi.spyOn(Math, 'random').mockReturnValue(0.5)
})

afterEach(() => {
  vi.restoreAllMocks()
})

it('renders without crashing', async () => {
  await act(async () => {
    render(<App />)
  })
})

it('renders correctly', async () => {
  const { asFragment } = await act(async () => render(<App />))
  expect(asFragment()).toMatchSnapshot()
})

it('renders content from all four sections', async () => {
  const { getByText } = await act(async () => render(<App />))
  expect(
    getByText('Front End Developer, Building and Maintaining React Apps'),
  ).toBeInTheDocument()
  expect(getByText('Tools & Stuff')).toBeInTheDocument()
  expect(getByText('Projects')).toBeInTheDocument()
  expect(getByText('Get in touch')).toBeInTheDocument()
})
