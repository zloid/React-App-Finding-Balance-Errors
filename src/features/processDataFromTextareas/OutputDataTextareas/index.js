import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Badge } from 'react-bootstrap'
import Textarea from 'react-textarea-autosize'
//selector
//in: {[4, 99], [1]}; out: '4\n\n99\n'
const selectFirstList = (numbersOne, numbersTwo, filter) => {
  if (filter) {
    return ''
  }
  //in: 2 array for compare; out: specific first array
  //in: [1,2,3], [3,1,999]; out: [2]
  //in: [3,1,999,1], [1,2,3]; out: [999, 1]
  function removePairNumbersOnce(firstArray = [], [...secondArray] = []) {
    let outputArray = firstArray.map(e => {
      if (secondArray.indexOf(e) !== -1) {
        secondArray.splice(secondArray.indexOf(e), 1)
        return (e = null)
      }
      return e
    })
    outputArray = outputArray.filter(e => e !== null)
    return outputArray
  }
  //it return only numbersOne val.
  let resultStr = removePairNumbersOnce(numbersOne, numbersTwo)
  return resultStr.join('\n')
}

const mapState = state => {
  let { dataFromTextareaOne, dataFromTextareaTwo, deleteAllFlag } = state.leftTextareaReducer
  // let filter = state.leftTextareaReducer.deleteAllFlag   
  return {
    outputOne: selectFirstList(
      dataFromTextareaOne,
      dataFromTextareaTwo,
      deleteAllFlag
    ),
    outputTwo: selectFirstList(
      dataFromTextareaTwo,
      dataFromTextareaOne,
      deleteAllFlag
    ),
  }
}

const OutputDataTextareas = ({ outputOne, outputTwo }) => {
  return (
    <>
      <Row>
        <Col>
          <Badge pill variant="warning">
            2_3_
          </Badge>
          <Textarea value={outputOne} />
        </Col>
        <Col>
          <Badge pill variant="warning">
            2_4_
          </Badge>
          <Textarea value={outputTwo} />
        </Col>
      </Row>
    </>
  )
}

export default connect(mapState, null)(OutputDataTextareas)
