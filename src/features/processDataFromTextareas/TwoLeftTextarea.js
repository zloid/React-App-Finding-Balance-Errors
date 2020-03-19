import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  Row,
  Col,
  Button,
  Badge,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap'
import Textarea from 'react-textarea-autosize'

import {
  getDataFromTextarea,
  deleteAllFlagChange,
  deleteAllFlagFalse,
} from 'features/processDataFromTextareas/leftTextareaSlice'
import { selectLenOfInputs } from 'features/selectors'

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
    window.scrollTo(0, 0)
    if (stateTextareaOne.trim() && stateTextareaTwo.trim()) {
      deleteAllFlagFalse()
      getDataFromTextarea({ stateTextareaOne, stateTextareaTwo })
    }
  }

  function returnValues() {
    window.scrollTo(0, 0)
    setStateTextareaOne(dataFromTextareaOne.join('\n'))
    setStateTextareaTwo(dataFromTextareaTwo.join('\n'))
  }

  return (
    <>
      <Row>
        <Col>
          <span className="underlineNumbers">
            {selectLenOfInputs(stateTextareaOne)}
          </span>
          <Textarea
            value={stateTextareaOne}
            onChange={e => setStateTextareaOne(e.target.value)}
          />
        </Col>
        <Col>
          <span className="underlineNumbers">
            {selectLenOfInputs(stateTextareaTwo)}
          </span>
          <Textarea
            value={stateTextareaTwo}
            onChange={e => setStateTextareaTwo(e.target.value)}
          />
        </Col>
        <Col>
          <div className="sticky">
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

            <OverlayTrigger
              placement="auto"
              overlay={
                <Tooltip id="tooltip-disabled">
                  <Row>
                    <Col sm={5} xs={5}>
                      {dataFromTextareaOne.join(', ')}
                    </Col>
                    <Col sm={1} xs={1}>
                      ---
                    </Col>
                    <Col sm={5} xs={5}>
                      {dataFromTextareaTwo.join(', ')}
                    </Col>
                  </Row>
                </Tooltip>
              }
            >
              <Button onClick={returnValues} variant="warning">
                Return
              </Button>
            </OverlayTrigger>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default connect(mapState, mapDispatch)(TwoLeftTextarea)
