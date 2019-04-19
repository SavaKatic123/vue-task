import { mount } from '@vue/test-utils'
import ProductForm from './../../src/components/ProductForm.vue'
import { MOCK_ITEM, MOCK_INVALID_ID_ITEMS } from './../../src/constants/tests.js'

describe('ProductForm.vue', () => {
  const wrapper = mount(ProductForm)

  test('is new item id binded to input', () => {
    const inputWrapper = wrapper.find('input[name="id"]')
    inputWrapper.setValue("new value")
    expect(wrapper.vm.item.id).toBe("new value")
  })
  test('is new item name binded to input', () => {
    const inputWrapper = wrapper.find('input[name="name"]')
    inputWrapper.setValue("new value")
    expect(wrapper.vm.item.name).toBe("new value")
  })
  test('is model cleared after adding', () => {
    wrapper.setData({item: {
      id: '',
      name: ''
    }})
    wrapper.vm.addItem(MOCK_ITEM)
    expect(wrapper.vm.item.name).toBe("")
    expect(wrapper.vm.item.id).toBe("")
  })
})

describe('Input validation', () => {
  test('is new product name capitalized', () => {
    const wrapper = mount(ProductForm)

    wrapper.setData({item: {
      id: 'PR-12345AD',
      name: 'product1'
    }})
    wrapper.vm.addItem()
    expect(wrapper.emitted('add-item')).toBeFalsy()

    wrapper.setData({item: {
      id: 'PR-12345AD',
      name: 'Product1'
    }})
    wrapper.vm.addItem()
    expect(wrapper.emitted('add-item').length).toBe(1)
  })
  test('is new product name at least 3 characters long', () => {
    const wrapper = mount(ProductForm)

    wrapper.setData({item: {
      id: 'PR-12345AD',
      name: 'Pr'
    }})
    wrapper.vm.addItem()
    expect(wrapper.emitted('add-item')).toBeFalsy()

    wrapper.setData({item: {
      id: 'PR-12345AD',
      name: 'Product1'
    }})
    wrapper.vm.addItem()
    expect(wrapper.emitted('add-item').length).toBe(1)
  })
  test('is new product id format validated', () => {
    const wrapper = mount(ProductForm)
    MOCK_INVALID_ID_ITEMS.forEach((item) => {
      wrapper.setData({item: item})
      wrapper.vm.addItem()
    })
    expect(wrapper.emitted('add-item')).toBeFalsy()
  })
  test('is empty id validated', () => {
    const wrapper = mount(ProductForm)
    wrapper.setData({item: {
      id: '',
      name: 'Product1'
    }})
    wrapper.vm.addItem()

    expect(wrapper.emitted('add-item')).toBeFalsy()
  })
  test('is empty name validated', () => {
    const wrapper = mount(ProductForm)
    wrapper.setData({item: {
      id: 'PR-12345AD',
      name: ''
    }})

    wrapper.vm.addItem()
    expect(wrapper.emitted('add-item')).toBeFalsy()
  })
})
