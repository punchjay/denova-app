import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { appData as mockData } from '../AppData/AppData'
import CardTwo from '../Components/CardTwo'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CardTwo appData={mockData[1]} />, div)
})

it('renders correctly', () => {
  const tree = renderer.create(<CardTwo appData={mockData[1]} />)
  expect(tree).toMatchSnapshot()
})
