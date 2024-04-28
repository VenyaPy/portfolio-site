from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()  # Создаем экземпляр SQLAlchemy


class Reviews(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, default=datetime.now)
    username = db.Column(db.String(200), nullable=False)
    text = db.Column(db.Text, nullable=False)
    img = db.Column(db.Text)

    def __repr__(self):
        return '<Article %r>' % self.id


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)


