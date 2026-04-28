import { render } from '@testing-library/react'
import TextContent from '../Components/TextContent'

it('renders without crashing', () => {
  render(
    <TextContent>
      <div>content</div>
    </TextContent>,
  )
})

it('renders correctly', () => {
  const { asFragment } = render(
    <TextContent>
      <div>content</div>
    </TextContent>,
  )
  expect(asFragment()).toMatchSnapshot()
})
