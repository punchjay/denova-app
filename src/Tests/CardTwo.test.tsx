import { render } from '@testing-library/react'
import { appData as mockData } from '../AppData/AppData'
import CardTwo from '../Components/CardTwo'

it('renders without crashing', () => {
  render(<CardTwo appData={mockData[1]} />)
})

it('renders correctly', () => {
  const { asFragment } = render(<CardTwo appData={mockData[1]} />)
  expect(asFragment()).toMatchSnapshot()
})
