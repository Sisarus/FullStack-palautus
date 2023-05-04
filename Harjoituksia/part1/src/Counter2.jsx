import { useState } from "react";
  
const Counter2 = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])
    const [total, setTotal] = useState(0)
  
    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        const updatedLeft = left + 1
        setLeft(updatedLeft)
        setTotal(updatedLeft + right) 
    }
  
    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        const updatedRight = right + 1
        setRight(updatedRight)
        setTotal(updatedRight + left) 
    }

    const Button = (props) => { 
        console.log('props value is', props)
        const { handleClick, text } = props
        return (
          <button onClick={handleClick}>
            {text}
          </button>
        )
      }
      

    const History = (props) => {
        if (props.allClicks.length === 0) {
          return (
            <div>
              the app is used by pressing the buttons
            </div>
          )
        }
        return (
          <div>
            button press history: {props.allClicks.join(' ')}
          </div>
        )
      }
  
    return (
      <div>
        <div>
          {left}
          <Button handleClick={handleLeftClick} text='left' />
          <Button handleClick={handleRightClick} text='right' />
          {right}
          <p>{allClicks.join(' ')}</p>
          <History allClicks={allClicks} />
        </div>
      </div>
    )
  }
  export default Counter2