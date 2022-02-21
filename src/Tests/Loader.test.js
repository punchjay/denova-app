import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Loader from '../Components/Loader'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Loader />, div)
})

it('renders correctly', () => {
  const tree = renderer.create(<Loader />)
  expect(tree).toMatchSnapshot()
})
