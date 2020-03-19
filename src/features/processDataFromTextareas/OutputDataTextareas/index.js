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
          <Button variant="success" onClick={copyToClipboard}>
            copy
          </Button>
          <span className="underlineNumbers">{selectLenOfInputs(outputOne)}</span>

          <br />
          <Textarea className="sticky" value={outputOne} inputRef={textInput} />
        </Col>

        <Col>
          <Button variant="success" onClick={copyToClipboardTwo}>
            copy
          </Button>
          <span className="underlineNumbers">{selectLenOfInputs(outputTwo)}</span>

          <br />
          <Textarea
            className="sticky"
            value={outputTwo}
            inputRef={textInputTwo}
          >
            asc
          </Textarea>
        </Col>
      </Row>
    </>
  )
}

export default connect(mapState, null)(OutputDataTextareas)
