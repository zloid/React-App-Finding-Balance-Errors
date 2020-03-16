import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button, Badge } from 'react-bootstrap'
import Textarea from 'react-textarea-autosize'

import { getDataFromTextarea } from 'features/processDataFromTextareas/leftTextareaSlice'

const mapState = state => ({
  demoDataOne: state.leftTextareaReducer.demoDataOne,
  demoDataTwo: state.leftTextareaReducer.demoDataTwo,
})
const mapDispatch = { getDataFromTextarea }

const TwoLeftTextarea = ({ getDataFromTextarea, demoDataOne, demoDataTwo }) => {
  const [stateTextareaOne, setStateTextareaOne] = useState('1')
  const [stateTextareaTwo, setStateTextareaTwo] = useState('2')

  function someDemo() {
    setStateTextareaOne(demoDataOne.join('\n'))
    setStateTextareaTwo(demoDataTwo.join('\n'))
  }

  function deleteAll() {
    setStateTextareaOne('')
    setStateTextareaTwo('')
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
          <Button
            variant="success"
            onClick={() =>
              getDataFromTextarea({ stateTextareaOne, stateTextareaTwo })
            }
          >
            {' '}
            Get Result {`>>`}
          </Button>
          <br />
          <br />
          <Button onClick={deleteAll} variant="secondary">
            Delete All
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default connect(mapState, mapDispatch)(TwoLeftTextarea)
