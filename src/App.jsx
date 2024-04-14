import { useState } from 'react'
import Description from './Description/Description'
import Options from './Options/Options'
import Feedback from './Feedback/Feedback'

const [feadback, setFeadback] = useState((){
     
    return {
	good: 0,
	neutral: 0,
	bad: 0
}})

export default function App() {
  return (
    <div>
      <Description />
      <Options good={feadback.good} neutral={feadback.neutral} bad={feadback.bad} />
      <Feedback />
    </div>
  )
}