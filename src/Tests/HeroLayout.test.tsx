import { render } from '@testing-library/react'
import HeroLayout from '../Components/HeroLayout'

it('renders without crashing', () => {
  render(
    <HeroLayout>
      <div>content</div>
    </HeroLayout>,
  )
})

it('renders correctly', () => {
  const { asFragment } = render(
    <HeroLayout>
      <div>content</div>
    </HeroLayout>,
  )
  expect(asFragment()).toMatchSnapshot()
})
