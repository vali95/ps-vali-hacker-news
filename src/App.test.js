import React from 'react';
import { shallow} from 'enzyme';


import App from './App'



describe("App Component",()=>{
    it("Snapshot test",()=>{
        const wrapper = shallow(<App/>);
        expect(wrapper).toMatchSnapshot()
    })
})
