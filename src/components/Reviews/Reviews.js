import { useState, useEffect } from 'react';
import API from 'api/apiService';
import s from './Reviews.module.css';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

const apiService = new API();

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    apiService.fetchFilmsReviews(movieId).then(res => setReviews(res.results));
  }, [movieId]);
  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id} className={s.list}>
                <h4 className={s.title}>Author: {review.author}</h4>
                <p className={s.text}>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <ErrorMessage message="We don`t have ane reviews for this movie" />
      )}
    </div>
  );
}
