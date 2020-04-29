import React from 'react';
import App from './App';
import List from './List';
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({
  adapter: new Adapter()
});



describe('APP', () => {

    const wrapper = shallow(<App />);

  test('renders text', () => {
    const txtElem = wrapper.find(`h3`);
    expect(txtElem.length).toBe(1);
    expect(txtElem.text()).toBe('1');
  });
  
  test('renders button', () => {
    const btnElem = wrapper.find(`[type="button"]`);
    expect(btnElem.length).toBe(1);
  });
  
  test('button click', () => {
    const btnElem = wrapper.find(`[type="button"]`);
    btnElem.simulate('click');
    const txtElem = wrapper.find(`h3`);
    expect(txtElem.text()).toBe('2');
  });
      
});


describe('LIST', () => {

  const props = { list: [1, 2, 3] }
  const wrapper = shallow(<List {...props} />);

  test('renders list', () => {
    const listElem = wrapper.find('#list');
    expect(listElem.length).toBe(1);
  });

  test('renders list item', () => {
    const listItem = wrapper.find('li');
    expect(listItem.length).toBe(3);
  });

});
