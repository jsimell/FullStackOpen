import { useState } from "react"

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleReview = (type) => () => {
    console.log(good)
    if (type === "good") {
      setGood(good + 1)
    } else if (type === "neutral") {
      setNeutral(neutral + 1)
    } else {
      setBad(bad + 1)
    }
  } 

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleReview("good")}>good</button>
      <button onClick={handleReview("neutral")}>neutral</button>
      <button onClick={handleReview("bad")}>bad</button>
      <h1>statistics</h1>
      <p>
        good {good}
        <br/>
        neutral {neutral}
        <br/>
        bad {bad}
      </p>
    </div>
  )
}

export default App