/* 
role: get 2 array for compare, out specific first array for OutputDataTextareas;
arg: {['4', '99'], ['1']}; ~> ret: '4\n\n99\n'
 */
export const selectFirstList = (firstArray = [], [...secondArray], filter) => {
  if (filter) {
    return ''
  }
  let outputArray = firstArray.map(e => {
    if (secondArray.indexOf(e) !== -1) {
      secondArray.splice(secondArray.indexOf(e), 1)
      return (e = null)
    }
    return e
  })
  outputArray = outputArray.filter(e => e !== null)
  return outputArray.join('\n')
}
/*
role: compute length of elements for OutputDataTextareas, TwoLeftTextarea
arg: '4\n\n   99\n'; ~> ret: 2
*/
export const selectLenOfInputs = stringN =>
  stringN.split('\n').filter(e => e.trim() !== '').length
/*
role: pass only number & string characters for leftTextareaSlice
arg: ' foo\n\n\n\nbar\n  777%  '; ~> ret: ['foo', 'bar', '777%'];
arg: '$$$'; ~> ret: [];
*/
export const doGoodArray = stringFromTextarea => {
  let mid = stringFromTextarea.split('\n').filter(e => /\w/.test(e) === true)
  return mid.map(e => e.trim().replace(/,/g, '.'))
}
