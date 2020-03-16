import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Badge } from 'react-bootstrap'
import Textarea from 'react-textarea-autosize'
/* function balanceErrorApp(ar2 = [], [...arr] = []) {
    let ar3 = ar2.map(e => {
        if (arr.indexOf(e) !== -1) {
            arr.splice(arr.indexOf(e), 1)
            return e = null
        }
        return e
    })
    ar3 = ar3.filter(e => e !== null)
    return {ar3, arr} 
} */
function balanceErrorApp(ar2 = [], [...arr] = []) {
  let ar3 = ar2.map(e => {
    if (arr.indexOf(e) !== -1) {
      arr.splice(arr.indexOf(e), 1)
      return (e = null)
    }
    return e
  })
  ar3 = ar3.filter(e => e !== null)
  return ar3
}

const selectDataFromTextareaOne = state => {
  let { dataFromTextareaOne, dataFromTextareaTwo } = state.leftTextareaReducer
  let res = balanceErrorApp(dataFromTextareaOne, dataFromTextareaTwo)
  console.log(res)
  return res
}

const selectDataFromTextareaTwo = state => {
  let { dataFromTextareaOne, dataFromTextareaTwo } = state.leftTextareaReducer
  let res = balanceErrorApp(dataFromTextareaTwo, dataFromTextareaOne)
  console.log(res)
  return res
}

const mapState = state => {
  return {
    outputOne: selectDataFromTextareaOne(state),
    outputTwo: selectDataFromTextareaTwo(state),
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
          <Textarea value={outputOne.join('\n')} />
        </Col>
        <Col>
          <Badge pill variant="warning">
            2_4_
          </Badge>
          <Textarea value={outputTwo.join('\n')} />
        </Col>
      </Row>
    </>
  )
}

export default connect(mapState, null)(OutputDataTextareas)
