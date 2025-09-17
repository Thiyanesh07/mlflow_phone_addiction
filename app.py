from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)


try:
    model = joblib.load('addiction_model_v2.pkl')
except FileNotFoundError:
    print("Error: 'addiction_model_v2.pkl' not found. Please run the updated train_model.py first.")
    model = None

@app.route('/predict', methods=['POST'])
def predict():
    if model is None:
        return jsonify({'error': 'Model not loaded'}), 500

    data = request.get_json()

    try:
        feature_values = [
            float(data['sleep_hours']),
            int(data['age']),
            float(data['daily_usage_hours']),
            int(data['academic_performance']),
            int(data['apps_used_daily']),
            float(data['time_on_social_media']),
            float(data['weekend_usage_hours']),
            int(data['phone_checks_per_day']),
            float(data['time_on_gaming'])
        ]

    
        features = np.array([feature_values])

        
        prediction = model.predict(features)
        if prediction[0] > 0 and prediction[0] <= 3:
            addiction_level = "Low"
        elif prediction[0] > 3 and prediction[0] <= 7:
            addiction_level = "Medium"
        else:
            addiction_level = "High"

        return jsonify({'addiction_level': addiction_level})

    except (KeyError, TypeError, ValueError) as e:
        return jsonify({'error': f'Invalid or missing input data: {e}'}), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=10000)