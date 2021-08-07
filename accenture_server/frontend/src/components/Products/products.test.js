import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Products from './products.jsx'

// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() })

describe('Products', () => {
  it('should render Products component', () => {
    const wrapper = shallow(<Products/>)
    const header = wrapper.find('h1')
    expect(header).toHaveLength(1)
    expect(header.text()).toEqual('Products')
  })
})