# Phone Addiction Prediction with MLflow

A machine learning project that predicts phone addiction levels in teenagers using various behavioral and demographic features, with experiment tracking powered by MLflow.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Dataset](#dataset)
- [Installation](#installation)
- [Usage](#usage)
- [Model Performance](#model-performance)
- [MLflow Integration](#mlflow-integration)
- [Contributing](#contributing)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)

## 🔍 Overview

This project analyzes teenage phone addiction patterns using machine learning techniques. It includes comprehensive data analysis, feature engineering, model training with MLflow for experiment tracking and model versioning.

## ✨ Features

- **Exploratory Data Analysis (EDA)**: Comprehensive analysis of phone usage patterns
- **Feature Engineering**: Advanced preprocessing and feature creation
- **Machine Learning Models**: Multiple algorithms for addiction prediction
- **MLflow Integration**: Experiment tracking, model versioning, and model registry
- **Interactive Visualizations**: Charts and graphs for model insights
- **Web Application**: Flask-based interface for predictions
- **Model Management**: Comprehensive model lifecycle management

## 📁 Project Structure

```
mlflow_phone_addiction/
├── EDA_FE_.ipynb                    # Exploratory Data Analysis & Feature Engineering
├── Model.ipynb                      # Model training and evaluation
├── Visualization.ipynb              # Data visualization and insights
├── app.py                          # Flask web application
├── index.html                      # Web interface template
├── addiction_model_v2.pkl          # Trained model file
├── requirements.txt                # Python dependencies
├── teen_phone_addiction_dataset.csv # Original dataset
├── cleaned_balanced_dataset.csv    # Preprocessed dataset
├── pred_vs_actual.png             # Model performance visualization
├── residuals.png                   # Residual analysis chart
├── mlruns/                         # MLflow experiment tracking
└── static/                         # Static web assets
```

## 📊 Dataset

The project uses a comprehensive dataset of teenage phone usage patterns including:

- Demographic information (age, gender, etc.)
- Phone usage statistics (screen time, app usage, etc.)
- Behavioral indicators
- Addiction severity levels

**Files:**
- `teen_phone_addiction_dataset.csv`: Original raw dataset
- `cleaned_balanced_dataset.csv`: Preprocessed and balanced dataset ready for training

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/Thiyanesh07/mlflow_phone_addiction.git
cd mlflow_phone_addiction
```

2. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Start MLflow server (optional):
```bash
mlflow server --host 0.0.0.0 --port 5000
```

## 🚀 Usage

### Running the Jupyter Notebooks

1. **Exploratory Data Analysis:**
```bash
jupyter notebook EDA_FE_.ipynb
```

2. **Model Training:**
```bash
jupyter notebook Model.ipynb
```

3. **Visualization:**
```bash
jupyter notebook Visualization.ipynb
```

### Running the Web Application

```bash
python app.py
```

Visit `http://localhost:5000` to access the web interface for making predictions.

### Making Predictions

The web application provides an intuitive interface where you can:

- Input demographic and behavioral data
- Get real-time addiction level predictions
- View model confidence scores

## 📈 Model Performance

The project includes comprehensive model evaluation with:

- Prediction vs Actual plots (`pred_vs_actual.png`)
- Residual analysis (`residuals.png`)
- Cross-validation scores
- Feature importance analysis

## 🔬 MLflow Integration

This project leverages MLflow for:

- **Experiment Tracking**: All model runs, parameters, and metrics
- **Model Registry**: Version control for trained models
- **Artifact Storage**: Model files, plots, and datasets
- **Reproducibility**: Complete experiment lineage

### Viewing MLflow UI

```bash
mlflow ui --backend-store-uri ./mlruns
```

Access the MLflow dashboard at `http://localhost:5000` to view experiments and model versions.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Setup

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👥 Authors

- **Thiyanesh07** - *Initial work* - [Thiyanesh07](https://github.com/Thiyanesh07)

## 🙏 Acknowledgments

- MLflow community for excellent experiment tracking tools
- Open source contributors for the libraries used
- Research community for insights on digital addiction patterns

---

**Note**: This project is for educational and research purposes. Always consult with healthcare professionals for actual addiction assessment and treatment.
