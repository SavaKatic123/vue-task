import { mount } from '@vue/test-utils'
import ProductList from './../../../src/components/ProductList.vue'
import { MOCK_ITEMS } from './../../../src/constants/tests.js'

describe('test.props.vue', () => {
  test('empty prop list is not shown', () => {
    const wrapper = mount(ProductList, {
      propsData: {
        items: []
      }
    })
    expect(wrapper.contains('td')).toBeFalsy()
  })
  test('prop list is shown in table', () => {
    const wrapper = mount(ProductList, {
      propsData: {
        items: MOCK_ITEMS
      }
    })
    expect(wrapper.html()).toContain('<td>' + MOCK_ITEMS[0].id + '</td>')
    expect(wrapper.html()).toContain('<td>' + MOCK_ITEMS[0].name +'</td>')

    expect(wrapper.html()).toContain('<td>' + MOCK_ITEMS[1].id + '</td>')
    expect(wrapper.html()).toContain('<td>' + MOCK_ITEMS[1].name +'</td>')
  })
})



