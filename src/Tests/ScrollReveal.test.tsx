import { render } from '@testing-library/react'
import ScrollReveal from '../Components/ScrollReveal'

it('renders without crashing', () => {
  render(
    <ScrollReveal>
      <div>content</div>
    </ScrollReveal>,
  )
})

it('renders correctly', () => {
  const { asFragment } = render(
    <ScrollReveal>
      <div>content</div>
    </ScrollReveal>,
  )
  expect(asFragment()).toMatchSnapshot()
})
