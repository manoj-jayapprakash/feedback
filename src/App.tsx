import { useState } from 'react';

import { FeedbackList } from './components/FeedbackList';
import { Header } from './components/Header';
import { Feedback, FeedbackData } from './data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id: number) => {
    if (window.confirm('Are you sure want to delete that feedback?'))
      setFeedback(feedback.filter((item: Feedback) => item.id !== id));
  };
  return (
    <div className="app container">
      <Header
        text="Feedback UI"
        bgColor="rgba(0, 0, 0, 0.4)"
        textColor="#ff6a95"
      />
      <FeedbackList feedbacks={feedback} handleDelete={deleteFeedback} />
    </div>
  );
}

export default App;
