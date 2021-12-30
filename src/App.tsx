import { useState } from 'react';

import { Header } from './components/Header';
import { FeedbackStats } from './components/FeedbackStats';
import { FeedbackList } from './components/FeedbackList';
import { Feedback, FeedbackData } from './data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id: number) => {
    if (window.confirm('Are you sure want to delete that feedback?'))
      setFeedback(feedback.filter((item: Feedback) => item.id !== id));
  };
  return (
    <div className="app">
      <Header
        text="Feedback UI"
        bgColor="rgba(0, 0, 0, 0.4)"
        textColor="#ff6a95"
      />
      <div className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedbacks={feedback} handleDelete={deleteFeedback} />
      </div>
    </div>
  );
}

export default App;
