import { useState } from 'react'

const Heading =(props) =>(<h3>{props.text}</h3>)


const Anecdotes = (props) => {
  if(props.vote === 0 && props.value === "votes"){
    return(
      <p>No votes</p>
    )
  }
  return(
    <div>
      <p>{props.anecdote}</p>
      <p>has {props.vote} votes</p>
    </div>)
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const initialVotes = Array.from({ length: anecdotes.length }, () => 0);
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(initialVotes)
  const [mostVotes, setMostVotes] = useState(0)

  const nextAnecdotes = () =>{
    const total = anecdotes.length
    const newSelected = Math.floor(Math.random()*(total + 0) + 0)
    console.log(newSelected)
    setSelected(newSelected)
  }

  const vote = () =>{
    const newVotes = [...votes]
    newVotes[selected] += 1

    const max = Math.max(...newVotes)
    const index = newVotes.indexOf(max)
    
    console.log(votes, index)
    setMostVotes(index)
    setVotes(newVotes)
  }

  return (
    <div>
      <Heading text="Anectode of day"/>
      <Anecdotes anecdote={anecdotes[selected]} vote={votes[selected]}/>
      <div>
        <button onClick={vote}>vote</button><button onClick={nextAnecdotes}>next anectode</button>
      </div>
      <Heading text="Anectode with most votes"/>
      <Anecdotes anecdote={anecdotes[mostVotes]} vote={votes[mostVotes]} value="votes"/>
    </div>
  )
}

export default App