import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { appData as mockData } from '../AppData/AppData'
import CardOne from '../Components/CardOne'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CardOne appData={mockData[0]} />, div)
})

it('renders correctly', () => {
  const tree = renderer.create(<CardOne appData={mockData[0]} />)
  expect(tree).toMatchSnapshot()
})
