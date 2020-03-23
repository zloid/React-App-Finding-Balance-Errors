/* 
role: get 2 array for compare, out specific first array
arg: {['4', '99'], ['1']}; ret: '4\n\n99\n'
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
role: compute length of elements
arg: '4\n\n   99\n'; ret: 2
*/
export const selectLenOfInputs = stringN =>
  stringN.split('\n').filter(e => e.trim() !== '').length
