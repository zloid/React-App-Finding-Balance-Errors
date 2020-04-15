/* import React from 'react'
import { Provider } from 'react-redux'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { configureStore } from '@reduxjs/toolkit'
//own
import rootReducer from 'reducers'
import App from 'components/App'

function render(
  ui,
  {
    store = configureStore({
      reducer: rootReducer,
    }),
  } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}
 */
// counter.test.js
import React from 'react'
import { createStore } from 'redux'
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, fireEvent, screen } from './test-utils'
import '@testing-library/jest-dom/extend-expect'
// import Counter from './counter'
import App from 'components/App'

describe('App', () => {
  it('first left textarea must contain 3.555', () => {
    render(<App />)
    const leftTextareaOne = screen.getByLabelText('input-first-data-textarea')
    expect(leftTextareaOne.textContent).toBe('3.555')
  })
  it('second left textarea must contain 9\n3.555\n789', () => {
    render(<App />)
    const leftTextareaTwo = screen.getByLabelText('input-second-data-textarea')
    expect(leftTextareaTwo.textContent).toBe('9\n3.555\n789')
  })
  it('first right textarea must be empty', () => {
    render(<App />)
    const rightTextareaOne = screen.getByLabelText(
      'output-first-right-textarea'
    )
    expect(rightTextareaOne.textContent).toBe('')
  })
  it('second right textarea must contain 9\n789', () => {
    render(<App />)
    const rightTextareaTwo = screen.getByLabelText(
      'output-second-right-textarea'
    )
    expect(rightTextareaTwo.textContent).toBe('9\n789')
  })
  it('click <Demo> button', () => {
    const { getByText } = render(<App />)
    const leftTextareaOne = screen.getByLabelText('input-first-data-textarea')
    const leftTextareaTwo = screen.getByLabelText('input-second-data-textarea')
    const rightTextareaOne = screen.getByLabelText(
      'output-first-right-textarea'
    )
    const rightTextareaTwo = screen.getByLabelText(
      'output-second-right-textarea'
    )
    const leftClick = { button: 1 }
    fireEvent.click(getByText(/demo/i), leftClick)
    expect(leftTextareaOne.textContent).toBe('5\n11\n1\n2\n2\n4\n4\n8.5\n9')
    expect(leftTextareaTwo.textContent).toBe('1\n2\n2\n3\n4\n8,5\n8.5')
    expect(rightTextareaOne.textContent).toBe('')
    expect(rightTextareaTwo.textContent).toBe('9\n789')
  })
  it('click <Demo> button, after click <Get Result> button', () => {
    const { getByText } = render(<App />)
    const leftTextareaOne = screen.getByLabelText('input-first-data-textarea')
    const leftTextareaTwo = screen.getByLabelText('input-second-data-textarea')
    const rightTextareaOne = screen.getByLabelText(
      'output-first-right-textarea'
    )
    const rightTextareaTwo = screen.getByLabelText(
      'output-second-right-textarea'
    )
    const leftClick = { button: 1 }
    fireEvent.click(getByText(/demo/i), leftClick)
    fireEvent.click(getByText(/get result/i), leftClick)
    expect(leftTextareaOne.textContent).toBe('5\n11\n1\n2\n2\n4\n4\n8.5\n9')
    expect(leftTextareaTwo.textContent).toBe('1\n2\n2\n3\n4\n8,5\n8.5')
    expect(rightTextareaOne.textContent).toBe('5\n11\n4\n9')
    expect(rightTextareaTwo.textContent).toBe('3\n8.5')
  })
  it('click <Delete All> button', () => {
    const { getByText } = render(<App />)
    const leftTextareaOne = screen.getByLabelText('input-first-data-textarea')
    const leftTextareaTwo = screen.getByLabelText('input-second-data-textarea')
    const rightTextareaOne = screen.getByLabelText(
      'output-first-right-textarea'
    )
    const rightTextareaTwo = screen.getByLabelText(
      'output-second-right-textarea'
    )
    const leftClick = { button: 1 }
    fireEvent.click(getByText(/delete all/i), leftClick)
    expect(leftTextareaOne.textContent).toBe('')
    expect(leftTextareaTwo.textContent).toBe('')
    expect(rightTextareaOne.textContent).toBe('')
    expect(rightTextareaTwo.textContent).toBe('')
  })
  it('click <Demo> button, after click <Get Result> button, after click <Delete All> button, after click <Return> button', () => {
    const { getByText } = render(<App />)
    const leftTextareaOne = screen.getByLabelText('input-first-data-textarea')
    const leftTextareaTwo = screen.getByLabelText('input-second-data-textarea')
    const rightTextareaOne = screen.getByLabelText(
      'output-first-right-textarea'
    )
    const rightTextareaTwo = screen.getByLabelText(
      'output-second-right-textarea'
    )
    const leftClick = { button: 1 }
    fireEvent.click(getByText(/demo/i), leftClick)
    fireEvent.click(getByText(/get result/i), leftClick)
    fireEvent.click(getByText(/delete all/i), leftClick)
    fireEvent.click(getByText(/return/i), leftClick)
    expect(leftTextareaOne.textContent).toBe('5\n11\n1\n2\n2\n4\n4\n8.5\n9')
    expect(leftTextareaTwo.textContent).toBe('1\n2\n2\n3\n4\n8.5\n8.5')
    expect(rightTextareaOne.textContent).toBe('')
    expect(rightTextareaTwo.textContent).toBe('')
  })
  it('check length of input and output elements of textareas is correct', () => {
    const { getByText } = render(<App />)
    const lengthOfTextareaElementsOne = screen.getByTitle(
      'length-of-input-first-data-textarea'
    )
    const lengthOfTextareaElementsTwo = screen.getByTitle(
      'length-of-input-second-data-textarea'
    )
    const lengthOfTextareaElementsThree = screen.getByTitle(
      'length-of-output-first-right-textarea'
    )
    const lengthOfTextareaElementsFour = screen.getByTitle(
      'length-of-output-second-right-textarea'
    )
    const leftClick = { button: 1 }
    expect(lengthOfTextareaElementsOne.textContent).toBe('1')
    expect(lengthOfTextareaElementsTwo.textContent).toBe('3')
    expect(lengthOfTextareaElementsThree.textContent).toBe('0')
    expect(lengthOfTextareaElementsFour.textContent).toBe('2')
    fireEvent.click(getByText(/demo/i), leftClick)
    fireEvent.click(getByText(/get result/i), leftClick)
    expect(lengthOfTextareaElementsOne.textContent).toBe('9')
    expect(lengthOfTextareaElementsTwo.textContent).toBe('7')
    expect(lengthOfTextareaElementsThree.textContent).toBe('4')
    expect(lengthOfTextareaElementsFour.textContent).toBe('2')
  })
})
