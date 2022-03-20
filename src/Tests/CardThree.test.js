import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { appData as mockData } from '../AppData/AppData'
import CardThree from '../Components/CardThree'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CardThree appData={mockData[1]} />, div)
})

it('renders correctly', () => {
  const tree = renderer.create(<CardThree appData={mockData[1]} />)
  expect(tree).toMatchSnapshot()
})
