import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Badge, Button } from 'react-bootstrap'
import Textarea from 'react-textarea-autosize'

import { selectFirstList } from 'features/selectors'

const mapState = state => {
  let {
    dataFromTextareaOne,
    dataFromTextareaTwo,
    deleteAllFlag,
  } = state.leftTextareaReducer
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
          <Button variant="success">copy</Button>
          <br />
          <br />
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
