import test from 'ava'
import normalize from './build/index'

test("returns an empty array if it's passed an empty array", t => {
  const normalized = normalize([])
  t.deepEqual(normalized, [])
})

test('correctly normalizes an array', t => {
  const normalized = normalize([1, 2, 3, 4, 5])
  t.deepEqual(normalized, [0, 0.25, 0.5, 0.75, 1])
})
