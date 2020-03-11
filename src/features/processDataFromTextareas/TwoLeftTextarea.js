import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button, Badge } from 'react-bootstrap'
import Textarea from 'react-textarea-autosize'

// <TAG (.|\n)*?<\/ TAG> - regexp for dell all badges
import { getDataFromTextarea } from 'features/processDataFromTextareas/leftTextareaSlice'
const mapDispatch = { getDataFromTextarea }
const mapState = state => ({
  fromState: state.leftTextareaReducer.dataFromTextareaOne,
  fromTwo: state.leftTextareaReducer.dataFromTextareaTwo,
})

const TwoLeftTextarea = ({ getDataFromTextarea, fromState, fromTwo }) => {
  const [stateTextareaOne, setStateTextareaOne] = useState('           1.1         ')
  const [stateTextareaTwo, setStateTextareaTwo] = useState('2,2 ')
  return (
    <div>
      1)
      {fromState}
      <br />
      2) {fromTwo}
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
          <Button variant="secondary">{`<<`} Demo</Button>
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
          <Button variant="secondary"> Delete All</Button>
        </Col>
      </Row>
    </div>
  )
}

export default connect(mapState, mapDispatch)(TwoLeftTextarea)
