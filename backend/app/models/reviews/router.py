from flask import Blueprint, request, jsonify

from backend.app.config import RECAPTCHA_SECRET_KEY
from backend.app.database.models import db, Reviews
from flask_cors import CORS
import requests

reviews_bp = Blueprint('reviews', __name__)
CORS(reviews_bp)


@reviews_bp.route('/post_review', methods=['POST'])
def review_post():
    try:
        if request.is_json:
            data = request.get_json()
            recaptcha_token = data.get('recaptcha', None)

            if not recaptcha_token:
                return jsonify({"error": "reCAPTCHA token is missing"}), 400

            # Проверяем reCAPTCHA token
            recaptcha_response = requests.post(
                'https://www.google.com/recaptcha/api/siteverify',
                data={'secret': RECAPTCHA_SECRET_KEY, 'response': recaptcha_token}
            ).json()

            if not recaptcha_response.get('success'):
                return jsonify({"error": "Invalid reCAPTCHA. Please try again."}), 400

            new_review = Reviews(
                username=data.get('username'),
                text=data.get('text'),
                img=data.get('img', None)
            )
            db.session.add(new_review)
            db.session.commit()
            return jsonify({"message": "Отзыв добавлен"}), 201
        else:
            return jsonify({"error": "Request must be JSON"}), 400
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


@reviews_bp.route('/get_reviews', methods=['GET'])
def get_reviews():
    try:
        reviews = Reviews.query.all()
        return jsonify([{
            'id': review.id,
            'username': review.username,
            'date': review.date,
            'text': review.text,
            'img': review.img
        } for review in reviews])
    except Exception as e:
        print(e)