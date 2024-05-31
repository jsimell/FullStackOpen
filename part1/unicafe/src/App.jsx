import { useState } from "react"

const StatisticLine = (props) => {
  const {text, value} = props
  return (
    <>
      <td>
        {text}
      </td>
      <td>
        {value} {text === "positive" ? "%": ""}
      </td>
    </>
  )
}

const Statistics = (props) => {
  const {good, neutral, bad, all} = props

  if (all === 0) {
    return (
      <p>No feedback given</p>
    )
  } else {
    return (
      <table>
        <tbody>
          <tr>
            <StatisticLine text="good" value={good} />
          </tr>
          <tr>
            <StatisticLine text="neutral" value={neutral} />
          </tr>
          <tr>
            <StatisticLine text="bad" value={bad} />
          </tr>
          <tr>
            <StatisticLine text="all" value={all} />
          </tr>
          <tr>
            <StatisticLine text="average" value={all === 0 ? 0: (good - bad) / all} />
          </tr>
          <tr>
            <StatisticLine text="positive" value={all === 0 ? 0: good / all} />
          </tr>
        </tbody>

      </table>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => () => setGood(good + 1)
  const handleNeutral = () => () => setNeutral(neutral + 1)
  const handleBad = () => () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood("good")}>good</button>
      <button onClick={handleNeutral("neutral")}>neutral</button>
      <button onClick={handleBad("bad")}>bad</button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={good + neutral + bad} />
    </div>
  )
}

export default App