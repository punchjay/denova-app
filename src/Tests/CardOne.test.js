import { render } from '@testing-library/react'
import { appData as mockData } from '../AppData/AppData'
import CardOne from '../Components/CardOne'

it('renders without crashing', () => {
  render(<CardOne appData={mockData[0]} />)
})

it('renders correctly', () => {
  const { asFragment } = render(<CardOne appData={mockData[0]} />)
  expect(asFragment()).toMatchSnapshot()
})
