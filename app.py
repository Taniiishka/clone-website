import os
from flask import Flask
from dotenv import load_dotenv
from db.db import db

load_dotenv()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

# Register blueprints here (example)
# from routes.main import main as main_blueprint
# app.register_blueprint(main_blueprint)

if __name__ == '__main__':
    app.run(debug=True)
