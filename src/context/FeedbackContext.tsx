import { useState, createContext } from 'react';
import { Feedback } from '../data/FeedbackData';

import { FeedbackData } from '../data/FeedbackData';

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback: Feedback) => {
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id: number) => {
    if (window.confirm('Are you sure want to delete that feedback?'))
      setFeedback(feedback.filter((item: Feedback) => item.id !== id));
  };

  return (
    <FeedbackContext.Provider value={{ feedback, addFeedback, deleteFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};
