import { getItems } from './index'

describe('getItems function', () => {
  it('returns items given number of items', () => {
    const numberOfItems = 2
    const items = getItems(numberOfItems)
    expect(items.length).toBe(2)
    const { title, index, id } = items[0]
    expect(title).toBe('Item 0')
    expect(index).toBe(0)
    expect(id).toBe('Item-0')
  })
})
