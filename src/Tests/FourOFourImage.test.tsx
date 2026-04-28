import { render } from '@testing-library/react'
import FourOFourImage from '../Components/FourOFourImage'

it('renders without crashing', () => {
  render(<FourOFourImage alt="test" src="test.png" />)
})

it('renders correctly', () => {
  const { asFragment } = render(<FourOFourImage alt="test" src="test.png" />)
  expect(asFragment()).toMatchSnapshot()
})
