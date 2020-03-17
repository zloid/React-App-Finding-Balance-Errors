import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button, Badge } from 'react-bootstrap'
import Textarea from 'react-textarea-autosize'

import {
  getDataFromTextarea,
  deleteAllFlagChange,
  deleteAllFlagFalse,
} from 'features/processDataFromTextareas/leftTextareaSlice'

const mapState = state => {
  const {
    demoDataOne,
    demoDataTwo,
    dataFromTextareaOne,
    dataFromTextareaTwo,
  } = state.leftTextareaReducer
  return {
    demoDataOne,
    demoDataTwo,
    dataFromTextareaOne,
    dataFromTextareaTwo,
  }
}

const mapDispatch = {
  getDataFromTextarea,
  deleteAllFlagChange,
  deleteAllFlagFalse,
}

const TwoLeftTextarea = ({
  getDataFromTextarea,
  demoDataOne,
  demoDataTwo,
  deleteAllFlagChange,
  deleteAllFlagFalse,
  dataFromTextareaOne,
  dataFromTextareaTwo,
}) => {
  const [stateTextareaOne, setStateTextareaOne] = useState('1')
  const [stateTextareaTwo, setStateTextareaTwo] = useState('2')

  function someDemo() {
    setStateTextareaOne(demoDataOne.join('\n'))
    setStateTextareaTwo(demoDataTwo.join('\n'))
  }

  function deleteAll() {
    setStateTextareaOne('')
    setStateTextareaTwo('')
    deleteAllFlagChange()
  }

  function getResult() {
    if (stateTextareaOne.trim() && stateTextareaTwo.trim()) {
      deleteAllFlagFalse()
      getDataFromTextarea({ stateTextareaOne, stateTextareaTwo })
    }
  }

  function returnValues() {
    setStateTextareaOne(dataFromTextareaOne.join('\n'))
    setStateTextareaTwo(dataFromTextareaTwo.join('\n'))
  }

  return (
    <>
      <Row>
        <Col>
          <Badge pill variant="warning">
            2_0_
          </Badge>
          <Textarea
            value={stateTextareaOne}
            onChange={e => setStateTextareaOne(e.target.value)}
          />
        </Col>
        <Col>
          <Badge pill variant="warning">
            2_1_
          </Badge>
          <Textarea
            value={stateTextareaTwo}
            onChange={e => setStateTextareaTwo(e.target.value)}
          />
        </Col>
        <Col>
          <Badge pill variant="warning">
            2_2_
          </Badge>
          <Button onClick={someDemo} variant="secondary">
            {`<<`} Demo
          </Button>
          <br />
          <br />
          <Button variant="success" onClick={getResult}>
            {' '}
            Get Result {`>>`}
          </Button>
          <br />
          <br />
          <Button onClick={deleteAll} variant="secondary">
            Delete All
          </Button>
          <br />
          <br />
          <Button onClick={returnValues} variant="warning">
            Return
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default connect(mapState, mapDispatch)(TwoLeftTextarea)
