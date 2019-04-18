import { mount } from '@vue/test-utils'
import EShop from './../../src/EShop.vue'
import { MOCK_ITEM } from './../../src/constants/tests.js'

describe('EShop.vue', () => {
  const wrapper = mount(EShop)
  test('is add item method implemented', () => {
    wrapper.vm.addItem(MOCK_ITEM)
    expect(wrapper.vm.items.length).toBe(1)
  })
  test('is remove item method implemented', () => {
    wrapper.setData({items: [MOCK_ITEM]})
    wrapper.vm.removeItem(0)
    expect(wrapper.vm.items.length).toBe(0)
  })
  test('is new product id unique validate', () => {
    wrapper.setData({items: [MOCK_ITEM]})

    wrapper.vm.addItem(MOCK_ITEM)
    expect(wrapper.vm.items.length).toBe(1)
  })
})