import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
///////////
import { configureStore } from '@reduxjs/toolkit'
import TwoLeftTextarea from 'features/processDataFromTextareas/TwoLeftTextarea'
//own
import rootReducer from 'reducers'

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
 
describe('TwoLeftTextarea', () => {
  it('contain 3.555', () => {
    const { getByText } = renderWithRedux(<TwoLeftTextarea />)    
    const leftTextarNmbr = getByText('3.555')
    expect(leftTextarNmbr.textContent).toEqual('3.555')
  })
})

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
