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

const Content = ({ text, count, add_text }) => {
  return (
    <p>{text} {count} {add_text}</p>
    )
  }
  
const Statistics = ({ good, neutral, bad }) => {
  const all = bad + good + neutral;
  return (
    <>
      <Content text={"good"} count={good}/>      
      <Content text={"neutral"} count={neutral}/>      
      <Content text={"bad"} count={bad}/>
      <Content text={"all"} count={all}/>
      <Content text={"average"} count={(good-bad)/all}/>
      <Content text={"positive"} count={(good/all) * 100} add_text={"%"}/>
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