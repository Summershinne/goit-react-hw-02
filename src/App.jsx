import { useState, useEffect } from 'react'
import Description from './Description/Description'
import Options from './Options/Options'
import Feedback from './Feedback/Feedback'
import Notification from './Notification/Notification'
  
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

  useEffect(() => {
    localStorage.setItem("feedbackCount", JSON.stringify(feedback))
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1
    })
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
    })
  };
  
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100); 

  return (
    <>
      <Description />
      <Options  updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}/>
      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback yet." />
      )}
    </>
  )
}