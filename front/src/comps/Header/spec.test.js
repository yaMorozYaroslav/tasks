import React from 'react'
import {shallow} from 'enzyme'
import {Header} from './index'

describe('Header Component', ()=>{
		it('It should render without errors', ()=>{
			const component = shallow(<Header />)
			//console.log(component.debug())
			const wrapper = component.find('.headerComponent')
			expect(wrapper.length).toBe(1)
		})
		it('Should render a logo', ()=>{
			const component = shallow(<Header />)
			const logo = component.find('.logoIMG')
			expect(logo.length).toBe(1)
		})
      })