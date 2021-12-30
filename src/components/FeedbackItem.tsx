import { useContext } from 'react';

import { FeedbackContext } from '../context/FeedbackContext';

import { Card } from './shared/Card';
import { FaTimes } from 'react-icons/fa';
import { Feedback } from '../data/FeedbackData';

type FeedbackItemProps = {
  feedbackItem: Feedback;
};

export const FeedbackItem = ({ feedbackItem }: FeedbackItemProps) => {
  const { deleteFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{feedbackItem.rating}</div>
      <button onClick={() => deleteFeedback(feedbackItem.id)} className="close">
        <FaTimes color="purple" />
      </button>

      <div className="text-display">{feedbackItem.text}</div>
    </Card>
  );
};
