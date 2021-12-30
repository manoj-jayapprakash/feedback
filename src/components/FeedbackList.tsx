import { useContext } from 'react';

import { FeedbackContext } from '../context/FeedbackContext';
import { FeedbackItem } from '../components/FeedbackItem';

export const FeedbackList = (): JSX.Element => {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) return <p>No Feedback Yet!</p>;

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem feedbackItem={item} key={item.id} />
      ))}
    </div>
  );
};
