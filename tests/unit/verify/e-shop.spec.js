import { mount } from '@vue/test-utils'
import EShop from './../../../src/EShop.vue'

describe('test.data.vue', () => {
  const wrapper = mount(EShop)

  test('items should be empty list', () => {
    expect(wrapper.vm.items.length).toBe(0)
  })

  test('items should be array', () => {
    expect(Array.isArray(wrapper.vm.items)).toBeTruthy()
  })
})
