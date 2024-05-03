import { useState, useEffect } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import './Reviews.css'
import { motion } from 'framer-motion';



export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [username, setUsername] = useState('');
    const [text, setText] = useState('');
    const [img, setImg] = useState('');
    const [captchaValue, setCaptchaValue] = useState(null);

    useEffect(() => {
        axios.get('https://venyapopov.ru:8443/api/get_reviews')
            .then(response => {
                setReviews(response.data);
            })
            .catch(error => console.error('Error fetching reviews:', error));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (captchaValue) {
            axios.post('https://venyapopov.ru:8443/api/post_review', { username, text, img, recaptcha: captchaValue })
                .then(response => {
                    alert('Отзыв добавлен');
                    setReviews([...reviews, response.data]);
                    setUsername('');
                    setText('');
                    setImg('');
                })
                .catch(error => alert('Error adding review:', error));
        } else {
            alert('Пожалуйста, подтвердите, что вы не робот.');
        }
    };

    const onCaptchaChange = (value) => {
        console.log("Captcha value:", value);
        setCaptchaValue(value);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="reviews-container"
        >
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
                    <div className="captcha">
                        <ReCAPTCHA
                            sitekey="6LeIK8opAAAAABVHS4PIWU8yNxht447LK22B55k-"
                            onChange={onCaptchaChange}
                        />
                    </div>
                    <button className="reviews-submit-button" type="submit">Отправить</button>
                </form>
            </div>
        </motion.div>
    );
}