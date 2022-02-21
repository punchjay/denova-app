import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import LoaderIcon from '../Components/LoaderIcon'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LoaderIcon />, div)
})

it('renders correctly', () => {
  const tree = renderer.create(<LoaderIcon />)
  expect(tree).toMatchSnapshot()
})
