import { Feedback } from '../data/FeedbackData';
import { FeedbackItem } from '../components/FeedbackItem';

type FeedbackListProps = {
  feedbacks: Feedback[];
  handleDelete: (id: number) => void;
};

export const FeedbackList = ({
  feedbacks,
  handleDelete,
}: FeedbackListProps): JSX.Element => {
  if (!feedbacks || feedbacks.length === 0) return <p>No Feedback Yet!</p>;

  return (
    <div className="feedback-list">
      {feedbacks.map((item) => (
        <FeedbackItem
          feedbackItem={item}
          key={item.id}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};
