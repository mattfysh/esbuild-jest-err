import { add } from '../src/add'
import d from '../src/add'
import * as e from '../src/add'

console.log({ d, e})

test('1+1', () => {
  expect(add(1, 1)).toEqual(2)
})
