import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import LoaderContainer from '../Components/LoaderContainer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LoaderContainer />, div)
})

it('renders correctly', () => {
  const tree = renderer.create(<LoaderContainer />)
  expect(tree).toMatchSnapshot()
})
