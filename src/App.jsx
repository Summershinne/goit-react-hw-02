import { useState } from 'react'
import Description from './Description/Description'
import Options from './Options/Options'
import Feedback from './Feedback/Feedback'

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedbackCount");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback)
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0
    };
  });
  return (
    <div>
      <Description />
      <Options good={feadback.good} neutral={feadback.neutral} bad={feadback.bad} />
      <Feedback />
    </div>
  )
}