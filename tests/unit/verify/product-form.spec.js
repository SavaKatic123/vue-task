import { mount } from '@vue/test-utils'
import ProductForm from './../../../src/components/ProductForm.vue'

describe('test.data.vue', () => {
  const wrapper = mount(ProductForm)

  test('name should be an empty string', () => {
    expect(wrapper.vm.item.name).toBe('')
  })

  test('id should be an empty string', () => {
    expect(wrapper.vm.item.id).toBe('')
  })

  test('should be an object', () => {
    expect(typeof wrapper.vm.item).toBe('object')
  })
})

describe('input.validation', () => {
  const wrapper = mount(ProductForm)
  test('id format beginning case sensitive validated', () => {
    wrapper.setData({item: {
      id: 'pr-12345AD',
      name: 'Product1'
    }})

    wrapper.vm.addItem()
    expect(wrapper.emitted('add-item')).toBeFalsy()
  })

  test('id format ending case sensitive validated', () => {
    wrapper.setData({item: {
      id: 'PR-12345ad',
      name: 'Product1'
    }})
    
    wrapper.vm.addItem()
    expect(wrapper.emitted('add-item')).toBeFalsy()
  })

  test('is name length of one validated', () => {
    wrapper.setData({item: {
      id: 'PR-12345AD',
      name: 'P'
    }})
    wrapper.vm.addItem()
    expect(wrapper.emitted('add-item')).toBeFalsy()
  })

  test('is name length of two validated', () => {
    wrapper.setData({item: {
      id: 'PR-12345AD',
      name: 'Pr'
    }})
    wrapper.vm.addItem()
    expect(wrapper.emitted('add-item')).toBeFalsy()
  })
})
