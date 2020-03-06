import React from 'react'
import PropTypes from 'prop-types'
import Textarea from 'react-textarea-autosize'

const TextareaCustom = ({ value, onChange }) => {
  return (
    <>
      <Textarea value={value} onChange={onChange}></Textarea>
    </>
  )
}

TextareaCustom.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
}

export default TextareaCustom
