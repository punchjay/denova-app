import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import AppContainer from '../Components/AppContainer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AppContainer />, div)
})

it('renders correctly', () => {
  const tree = renderer.create(<AppContainer />)
  expect(tree).toMatchSnapshot()
})
