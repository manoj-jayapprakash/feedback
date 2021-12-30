import { Feedback } from '../data/FeedbackData';
import { Card } from './shared/Card';
import { FaTimes } from 'react-icons/fa';
type FeedbackItemProps = {
  feedbackItem: Feedback;
  handleDelete: (id: number) => void;
};

export const FeedbackItem = ({
  feedbackItem,
  handleDelete,
}: FeedbackItemProps) => {
  return (
    <Card>
      <div className="num-display">{feedbackItem.rating}</div>
      <button onClick={() => handleDelete(feedbackItem.id)} className="close">
        <FaTimes color="purple" />
      </button>

      <div className="text-display">{feedbackItem.text}</div>
    </Card>
  );
};
