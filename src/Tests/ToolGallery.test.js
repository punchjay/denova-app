import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import ToolGallery from '../Components/ToolGallery'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ToolGallery />, div)
})

it('renders correctly', () => {
  const tree = renderer.create(<ToolGallery />)
  expect(tree).toMatchSnapshot()
})
