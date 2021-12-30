import { Feedback } from '../data/FeedbackData';

type FeedbackStatsProps = {
  feedback: Feedback[];
};

export const FeedbackStats = ({ feedback }: FeedbackStatsProps) => {
  let average = (
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length
  ).toFixed(1);

  average = average.replace(/[.,]0$/, '');

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {average}</h4>
    </div>
  );
};
