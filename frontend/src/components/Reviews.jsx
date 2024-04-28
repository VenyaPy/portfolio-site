import { useState, useEffect } from "react";
import axios from "axios";

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [username, setUsername] = useState('');
    const [text, setText] = useState('');
    const [img, setImg] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/get_reviews')
            .then(response => {
                setReviews(response.data);
            })
            .catch(error => console.error('Error fatching reviews:', error));
        }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://127.0.0.1:5000/api/post_review', {username, text, img})
            .then(response => {
                alert('Отзыв добавлен');
                setReviews([...reviews, response.data]);
                setUsername('');
                setText('');
                setImg('');
            })
            .catch(error => alert('Error adding review:', error));
    };

        return (
        <div className="reviews-container">
            <h1 className="reviews-title">Отзывы</h1>
            <ul className="reviews-list">
                {reviews.map(review => (
                    <li key={review.id} className="reviews-item">
                        <div className="review-header">{review.username}</div>
                        <div className="review-date">{new Date(review.date).toLocaleDateString()}</div>
                        <p className="review-text">{review.text}</p>
                        {review.img && <img src={review.img} alt="Attached" className="review-img" />}
                    </li>
                ))}
            </ul>
            <div className="reviews-form">
                <form onSubmit={handleSubmit}>
                    <input
                        className="reviews-input"
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        placeholder="Ваше имя"
                        required
                    />
                    <textarea
                        className="reviews-textarea"
                        value={text}
                        onChange={e => setText(e.target.value)}
                        placeholder="Ваш отзыв"
                        required
                    />
                    <input
                        className="reviews-input"
                        type="text"
                        value={img}
                        onChange={e => setImg(e.target.value)}
                        placeholder="URL скриншота"
                    />
                    <button className="reviews-submit-button" type="submit">Отправить</button>
                </form>
            </div>
        </div>
    );
}