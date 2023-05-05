import { useState } from 'react'

const Heading = (props) => <h2>{props.text}</h2>

const Statistics = ({feedbacks}) => {
  const total = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const avarage = total === 0 ? 0 : (feedbacks.good - feedbacks.bad) /total;
  const positive = total === 0 ? 0 : (feedbacks.good/total) * 100;

  if (total === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <div>
      <StatisticLine text="Good" value={feedbacks.good}/>
      <StatisticLine text="Neutral" value={feedbacks.neutral}/>
      <StatisticLine text="Bad" value={feedbacks.Bad}/>
      <StatisticLine text="Total" value={total}/>
      <StatisticLine text="Avarage" value={avarage}/>
      <StatisticLine text="Positive" value={positive + " %"}/>
    </div>
  )
}

const StatisticLine = (props)=>(<p>{props.text} {props.value}</p>)

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = ()=>{
    console.log("his")
    setGood(good +1)
  }

  const handleNeutralClick = ()=>{
    setNeutral(neutral +1)
  }

  const handleBadClick = ()=>{
    setBad(bad +1)
  }


  return (
    <div>
      <Heading text="Give feedback"/>
      <Button handleClick={()=>handleGoodClick()} text="Good"/>
      <Button handleClick={()=>handleNeutralClick()} text="Neutral" />
      <Button handleClick={()=>handleBadClick()} text="Bad"/>
      <Heading text="Statistic"/>
      <Statistics feedbacks={{good, neutral, bad}}/>
    </div>
  )
}

export default App