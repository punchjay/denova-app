import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Card from '../Components/Card'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Card />, div)
})

it('renders correctly', () => {
  const tree = renderer.create(<Card />)
  expect(tree).toMatchSnapshot()
})
