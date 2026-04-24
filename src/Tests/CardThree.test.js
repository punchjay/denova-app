import { render } from '@testing-library/react'
import { appData as mockData } from '../AppData/AppData'
import CardThree from '../Components/CardThree'

it('renders without crashing', () => {
  render(<CardThree appData={mockData[2]} />)
})

it('renders correctly', () => {
  const { asFragment } = render(<CardThree appData={mockData[2]} />)
  expect(asFragment()).toMatchSnapshot()
})
