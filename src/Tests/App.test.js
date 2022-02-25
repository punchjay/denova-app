import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import App from '../Components/App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

it('renders correctly', () => {
  const tree = renderer.create(<App />)
  expect(tree).toMatchSnapshot()
})
