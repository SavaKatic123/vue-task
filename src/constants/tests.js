const MOCK_ITEMS = [
  {
    id: 'PR-12345AD',
    name: 'Product1'
  },
  {
    id: 'PR-12334AD',
    name: 'Product2'
  }
]

const MOCK_ITEM = {
  id: 'PR-12345AD',
  name: 'Product1'
}

const MOCK_INVALID_ID_ITEMS = [
  {
    id: 'PR-123AD',
    name: 'Product1'
  },
  {
    id: 'PR-12B45AD',
    name: 'Product2'
  },
  {
    id: '123',
    name: 'Product3'
  },
  {
    id: 'PP-12345AD',
    name: 'Product4'
  },
  {
    id: 'PR12345AD',
    name: 'Product5'
  },
  {
    id: 'PR-12345AA',
    name: 'Product6'
  }
]


export {
  MOCK_ITEM,
  MOCK_INVALID_ID_ITEMS,
  MOCK_ITEMS
}