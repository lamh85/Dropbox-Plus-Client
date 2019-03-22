import React from "react"
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TableRow from '../../src/components/TableRow'

configure({ adapter: new Adapter() })

const setup = () => {
  const props = {
    id: 'someId',
    name: 'someFile'
  }
  
  const component = shallow(<TableRow {...props} />)
  return { component, props }
}

test('my first test', () => {
  const { component } = setup()
  console.log(component.debug())
  expect(component.find('CellStyles').length).toBe(2)
})