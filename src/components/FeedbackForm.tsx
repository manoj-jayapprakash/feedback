import { useState, useContext } from 'react';

import { Card } from './shared/Card';
import { Button } from './shared/Button';
import { RatingSelect } from './RatingSelect';
import { Feedback } from '../data/FeedbackData';

import { FeedbackContext } from '../context/FeedbackContext';

export const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState();
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const { addFeedback } = useContext(FeedbackContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (text === '') {
      setIsBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setIsBtnDisabled(true);
      setMessage('Review must be more than 10 characters');
    } else {
      setMessage(null);
      setIsBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newFeedback: Feedback = { id: new Date().valueOf(), text, rating };
    addFeedback(newFeedback);
    setText('');
  };

  return (
    <Card>
      <form onSubmit={onSubmit}>
        <h2>Please rate our service</h2>
        <RatingSelect select={(rating: number) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write your review"
            value={text}
            onChange={handleChange}
          />
          <Button children="Send" type="submit" isDisabled={isBtnDisabled} />
        </div>
        {message && <p className="message">{message}</p>}
      </form>
    </Card>
  );
};
