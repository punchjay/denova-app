import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { appData as mockData } from '../AppData/AppData'
import Footer from '../Components/Footer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Footer appData={mockData[3]} />, div)
})

it('renders correctly', () => {
  const tree = renderer.create(<Footer appData={mockData[3]} />)
  expect(tree).toMatchSnapshot()
})
