import { mount } from '@vue/test-utils'
import ProductList from './../../src/components/ProductList.vue'
import { MOCK_ITEM } from './../../src/constants/tests.js'

describe('ProductList.vue', () => {
  test('is remove item emitting event', () => {
    const wrapper = mount(ProductList, {
      propsData: {
        items: []
      }
    })
    wrapper.vm.removeItem(0)
    expect(wrapper.emitted('remove-item').length).toBe(1)
  })
  test('is added product name shown in table', () => {
    const wrapper = mount(ProductList, {
      propsData: {
        items: [MOCK_ITEM]
      }
    })
    expect(wrapper.html()).toContain('<td>' + MOCK_ITEM.name + '</td>')
  })
  test('is added product id shown in table', () => {
    const wrapper = mount(ProductList, {
      propsData: {
        items: [MOCK_ITEM]
      }
    })
    expect(wrapper.html()).toContain('<td>' + MOCK_ITEM.id + '</td>')
  })
})
