import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import HeaderOne from '../Components/HeaderOne'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<HeaderOne />, div)
})

it('renders correctly', () => {
  const tree = renderer.create(<HeaderOne />)
  expect(tree).toMatchSnapshot()
})
