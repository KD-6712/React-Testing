import React from 'react'

function CounterTwoProps(props) {
  return (
    <div>
        <h1>Counter Two</h1>
        <p>{props.count}</p>
        {props.handleIncrement && (
            <button onClick={props.handleIncrement}>Increment</button>
        )}
        {props.handleDecerement && (
            <button onClick={props.handleDecerement}>Decrement</button>
        )}
    </div>
  )
}

export default CounterTwoProps
