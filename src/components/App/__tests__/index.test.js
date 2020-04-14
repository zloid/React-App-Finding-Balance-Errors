import React from 'react'
import { Provider } from 'react-redux'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { configureStore } from '@reduxjs/toolkit'
//own
import rootReducer from 'reducers'
import App from 'components/App'
// import TwoLeftTextarea from 'features/processDataFromTextareas/TwoLeftTextarea'

function renderWithRedux(
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

describe('App', () => {
  it('first left textarea must contain 3.555', () => {
    renderWithRedux(<App />)
    const leftTextareaOne = screen.getByLabelText('input-first-data-textarea')
    expect(leftTextareaOne.textContent).toBe('3.555')
  })
  it('second left textarea must contain 9\n3.555\n789', () => {
    renderWithRedux(<App />)
    const leftTextareaTwo = screen.getByLabelText('input-second-data-textarea')
    expect(leftTextareaTwo.textContent).toBe('9\n3.555\n789')
  })
  it('first right textarea must be empty', () => {
    renderWithRedux(<App />)
    const rightTextareaOne = screen.getByLabelText(
      'output-first-right-textarea'
    )
    expect(rightTextareaOne.textContent).toBe('')
  })
  it('second right textarea must contain 9\n789', () => {
    renderWithRedux(<App />)
    const rightTextareaTwo = screen.getByLabelText(
      'output-second-right-textarea'
    )
    expect(rightTextareaTwo.textContent).toBe('9\n789')
  })
  it('click <Demo> button', () => {
    const { getByText } = renderWithRedux(<App />)
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
    const { getByText } = renderWithRedux(<App />)
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
    const { getByText } = renderWithRedux(<App />)
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
    const { getByText } = renderWithRedux(<App />)
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
})

// describe('TwoLeftTextarea', () => {
//   it('contain 3.555', () => {
// const { getByText } = renderWithRedux(<TwoLeftTextarea />)
// const leftTextarNmbr = getByText('3.555')
// expect(leftTextarNmbr.textContent).toEqual('3.555')
//   })
// })

// describe('TwoLeftTextarea', () => {
//     it('contain 789', () => {
//       const { getByText } = renderWithRedux(<TwoLeftTextarea />)
//       const rightTextarNmbr = getByText('9')
//       expect(rightTextarNmbr.textContent).toEqual('9')
//     })
//   })

/* import React from 'react'
import { render, fireEvent } from '@testing-library/react'
//own
import TwoLeftTextarea from 'features/processDataFromTextareas/TwoLeftTextarea'
 
class Counter extends React.Component {
  state = { count: 0 }
  increment = () => this.setState(({ count }) => ({ count: count + 1 }))
  decrement = () => this.setState(({ count }) => ({ count: count - 1 }))
  render() {
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}

describe('<Counter />', () => {
  it('properly increments and decrements the counter', () => {
    const { getByText } = render(<Counter />)
    const counter = getByText('0')
    const incrementButton = getByText('+')
    const decrementButton = getByText('-')
    fireEvent.click(incrementButton)
    expect(counter.textContent).toEqual('1')
    fireEvent.click(decrementButton)
    expect(counter.textContent).toEqual('0')
  })
})

// it('TwoLeftTextarea', () => {
//   const { getByText } = render(<TwoLeftTextarea />)
//   const counter = getByText('')
//   expect(counter.textContent).toEqual('')
// })
 */
