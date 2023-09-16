import { useState } from 'react'

const Header = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({ text, handler }) => {
  return (
    <>
      <button onClick={handler}>{text}</button>&nbsp;
    </>
  )
}

const Content = ({ text, feedback_count }) => {
  return (
    <p>{text} {feedback_count}</p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handlenNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <Header text={"Give Feedback"} />

      <br />

      <Button handler={handleGood} text={"good"} />
      <Button handler={handlenNeutral} text={"neutral"} />
      <Button handler={handleBad} text={"bad"} />

      <br />

      <Header text={"Statistics"} />

      <br />

      <Content text={"good"} feedback_count={good}/>      
      <Content text={"neutral"} feedback_count={neutral}/>      
      <Content text={"bad"} feedback_count={bad}/>      
    </div>
  )
}

export default App