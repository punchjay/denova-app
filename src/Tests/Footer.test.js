import { render } from '@testing-library/react'
import { appData as mockData } from '../AppData/AppData'
import Footer from '../Components/Footer'

it('renders without crashing', () => {
  render(<Footer appData={mockData[3]} />)
})

it('renders correctly', () => {
  const { asFragment } = render(<Footer appData={mockData[3]} />)
  expect(asFragment()).toMatchSnapshot()
})
