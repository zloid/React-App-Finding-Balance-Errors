import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Badge, Button } from 'react-bootstrap'
import Textarea from 'react-textarea-autosize'

import { selectFirstList, selectLenOfInputs } from 'features/selectors'

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
  const textInput = useRef(null)
  const textInputTwo = useRef(null)
  function copyToClipboard() {
    // e.target.focus()
    // textInput.current.focus();
    textInput.current.select()
    document.execCommand('copy')
  }
  function copyToClipboardTwo() {
    textInputTwo.current.select()
    document.execCommand('copy')
  }

  return (
    <>
      <Row>
        <Col>
          <Badge pill variant="warning">
            2_3_
          </Badge>
          <u>{selectLenOfInputs(outputOne)}</u>
          <Button variant="success" onClick={copyToClipboard}>
            copy
          </Button>
          <br />
          <br />
          <Textarea value={outputOne} inputRef={textInput} />
        </Col>
        <Col>
          <Badge pill variant="warning">
            2_4_
          </Badge>
          <u>{selectLenOfInputs(outputTwo)}</u>
          <Button variant="success" onClick={copyToClipboardTwo}>
            copy
          </Button>
          <br />
          <br />
          <Textarea value={outputTwo} inputRef={textInputTwo} />
        </Col>
      </Row>
    </>
  )
}

export default connect(mapState, null)(OutputDataTextareas)
