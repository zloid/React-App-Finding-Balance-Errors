/* 
selector selectFirstList role:
in: 2 array for compare; out: specific first array
in: {['4', '99'], ['1']}; out: '4\n\n99\n'
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
