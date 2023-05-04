import { useState } from "react";

const Display = (props) => {
    return (
      <div>{props.counter}</div>
    )
}
const Button = ({handleClick, text}) => {
    return (
      <button onClick={handleClick}>
        {text}
      </button>
    )
  }

const Counter = () => {
    const [ counter, setCounter ] = useState(0)
  
    console.log('rendering with counter value', counter)

    const increaseByOne = () => {
      console.log('increasing, value before', counter)
      setCounter(counter + 1)
    }
  
    const decreaseByOne = () => { 
      console.log('decreasing, value before', counter)
      setCounter(counter - 1)
    }
  
    const setToZero = () => {
      console.log('resetting to zero, value before', counter)
      setCounter(0)
    }
  
    return (
      <div>
        <Display counter={counter}/>
        <Button
          handleClick={increaseByOne}
          text='plus'
        />
        <Button
          handleClick={setToZero}
          text='zero'
        />     
        <Button
          handleClick={decreaseByOne}
          text='minus'
        />           
      </div>
    )
  }

  export default Counter