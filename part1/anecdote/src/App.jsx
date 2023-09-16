import { useState } from 'react'

const Header = ({text}) => {
  return(
    <h1>{text}</h1>
  )
}

const App = () => {

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const handleNextAnecdote = () => {
    const anecdote_index = getRandomInt(anecdotes.length)
    setSelected(anecdote_index)
  }

  const handleVoteCast = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVote(copy)

    const winner_index = copy.indexOf(Math.max(...copy));
    setWinner(winner_index)
  }
   
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(new Array(anecdotes.length).fill(0))
  const [winner, setWinner] = useState(0)

  return (
    <div>
      <Header text={"Anecdote of the day"} />
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVoteCast}>Vote</button>
      <button onClick={handleNextAnecdote}>Next Anecdote</button>
      <Header text={"Anecdote with most votes"} />
      <p>{anecdotes[winner]}</p>
    </div>
  )
}

export default App