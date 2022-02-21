import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import GalleryContainer from '../Components/GalleryContainer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<GalleryContainer />, div)
})

it('renders correctly', () => {
  const tree = renderer.create(<GalleryContainer />)
  expect(tree).toMatchSnapshot()
})
