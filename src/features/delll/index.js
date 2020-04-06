import React from 'react'
import { connect } from 'react-redux'
//own
const mapState = state => {
  const { dataFromTextareaOne, dataFromTextareaTwo } = state.leftTextareaReducer
  return {
    dataFromTextareaOne,
    dataFromTextareaTwo,
  }
}

const Delll = ({ dataFromTextareaOne }) => {
  return (
    <>
      <p>hello_w</p>
      <p>blah</p>
      <u>{dataFromTextareaOne}</u>
    </>
  )
}

export default connect(mapState, null)(Delll)
// export default Delll
