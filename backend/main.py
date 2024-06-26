from flask import Flask
from app.database.models import db
from flask_cors import CORS
from app.models.reviews.router import reviews_bp


def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config['SQLALCHEMY_DATABASE_URI'] = \
        'sqlite:////home/portfolio-site/backend/app/database/database.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)

    app.register_blueprint(reviews_bp, url_prefix='/api')

    return app


if __name__ == '__main__':
    app = create_app()
    with app.app_context():
        db.create_all()
    app.run(debug=True)
