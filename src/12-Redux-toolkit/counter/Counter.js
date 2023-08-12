import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {decrement,increment} from "./CounterSlice"

const Counter = () => {

  const count=useSelector(()=>this.state.counter.value)
  const dispatch=useDispatch();



  return (
    <div>
      <div style={{fontSize:"100px"}}>{count}</div>
      <button onClick={()=>dispatch(increment())}>İncrement(+)</button>
      <button onClick={()=>dispatch(decrement())}>Decrement(-)</button>
    </div>
  )
}

export default Counter