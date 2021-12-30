import { Header } from './components/Header';
import { FeedbackForm } from './components/FeedbackForm';
import { FeedbackStats } from './components/FeedbackStats';
import { FeedbackList } from './components/FeedbackList';

import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (
    <FeedbackProvider>
      <div className="app">
        <Header
          text="Feedback UI"
          bgColor="rgba(0, 0, 0, 0.4)"
          textColor="#ff6a95"
        />
        <div className="container">
          <FeedbackForm />
          <FeedbackStats />
          <FeedbackList />
        </div>
      </div>
    </FeedbackProvider>
  );
}

export default App;
