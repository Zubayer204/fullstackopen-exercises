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

const StatisticLine = ({ text, count, add_text }) => {
  return (
    <p>{text} {count} {add_text}</p>
    )
  }
  
const Statistics = ({ good, neutral, bad }) => {
  const all = bad + good + neutral;
  if (all <= 0){
    return (
      <p>No Feedback Given</p>
    )
  }
  return (
    <>
      <StatisticLine text={"good"} count={good}/>      
      <StatisticLine text={"neutral"} count={neutral}/>      
      <StatisticLine text={"bad"} count={bad}/>
      <StatisticLine text={"all"} count={all}/>
      <StatisticLine text={"average"} count={(good-bad)/all}/>
      <StatisticLine text={"positive"} count={(good/all) * 100} add_text={"%"}/>
    </>
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

      <Statistics good={good} neutral={neutral} bad={bad} />            
    </div>
  )
}

export default App