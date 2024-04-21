
export default function Feedback({ good, neutral, bad, totalFeedback, positiveFeedback }) {
    return(
    <div>
        <p>Good:{good}</p>
        <p>Neutral:{neutral}</p>
        <p>Bad:{bad}</p>
        <p>Total feedback: {totalFeedback}</p>
        <p>Positive: {positiveFeedback}%</p>
        </div>
    )
}