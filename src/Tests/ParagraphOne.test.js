import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import ParagraphOne from '../Components/ParagraphOne'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ParagraphOne />, div)
})

it('renders correctly', () => {
  const tree = renderer.create(<ParagraphOne />)
  expect(tree).toMatchSnapshot()
})
