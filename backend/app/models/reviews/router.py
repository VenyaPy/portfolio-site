from flask import Blueprint, request, jsonify
from backend.app.database.models import db, Reviews  # Убедитесь, что путь импорта адаптирован к вашей структуре проекта
from flask_cors import CORS

reviews_bp = Blueprint('reviews', __name__)
CORS(reviews_bp)


@reviews_bp.route('/post_review', methods=['POST'])
def review_post():
    try:
        if request.is_json:
            data = request.get_json()
            new_review = Reviews(
                username=data.get('username'),
                text=data.get('text'),
                img=data.get('img', None)  # Проверьте, что передаётся img
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