import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button, Badge } from 'react-bootstrap'
import Textarea from 'react-textarea-autosize'

// <TAG (.|\n)*?<\/ TAG>
//<Col>(.|\n|\r\n)*?<\/Col>
import { testAction } from 'features/processDataFromTextareas/leftTextareaSlice'
const mapDispatch = { testAction }

const TwoLeftTextarea = ({ testAction }) => {
  const [stateTextareaOne, setStateTextareaOne] = useState('stateTextareaOne')
  const [stateTextareaTwo, setStateTextareaTwo] = useState('stateTextareaTwo')
  return (
    <div>
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
          <Button variant="success" onClick={() => testAction(stateTextareaOne)}>
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

export default connect(null, mapDispatch)(TwoLeftTextarea)
