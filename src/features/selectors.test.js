import { selectFirstList, selectLenOfInputs, doGoodArray } from './selectors'

it('get 2 array for compare, output changed first array; for OutputDataTextareas', () => {
  expect(selectFirstList(['4', '99'], ['1'], false)).toEqual('4\n99')
})
it('get 2 array for compare, output changed first array; for OutputDataTextareas', () => {
  expect(selectFirstList(['4', '99'], ['1'], true)).toEqual('')
})
it('get 2 array for compare, output changed first array; for OutputDataTextareas', () => {
  expect(selectFirstList(['4.1', '99'], ['89', '4.1', '3'], false)).toEqual(
    '99'
  )
})
it('get 2 array for compare, output changed first array; for OutputDataTextareas', () => {
  expect(selectFirstList(['89', '4.1', '3'], ['4.1', '99'], false)).toEqual(
    '89\n3'
  )
})

it('compute length of elements; for OutputDataTextareas, TwoLeftTextarea', () => {
  expect(selectLenOfInputs(' 4\n\n  99\n2  ')).toBe(3)
})

it('must pass only number & string lines; for leftTextareaSlice', () => {
  expect(doGoodArray('  ##\n foo\n\n  \n\nbar\n  777%  \n 77,88  ')).toEqual([
    'foo',
    'bar',
    '777%',
    '77.88'
  ])
})
