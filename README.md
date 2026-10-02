# CropTag

CropTag is an AI-based image classification application for identifying Indian grains, millets, and pulses from an uploaded image.

The project contains two versions of the application, allowing the evolution of the system to be documented separately.

## Project Versions

### Version 1

The first application version using the V2 classification model.

- 38 food classes
- Grain, Millet, and Pulse categories
- Flask backend
- Web-based frontend
- Keras trained model

See [Version 1](./version%201/) for complete documentation.

### Version 2

An improved application version using the V3 experiment model.

- 38 food classes
- Grain, Millet, and Pulse categories
- Class prediction
- Category prediction
- Confidence scores
- Flask backend
- Web-based frontend
- Keras trained model

See [Version 2](./version%202/) for complete documentation.

## Repository Structure

CropTag/
+-- README.md
+-- version 1/
¦   +-- README.md
¦   +-- requirements.txt
¦   +-- v2_server.py
¦   +-- saved_model_v2/
¦   ¦   +-- best_model_v2.keras
¦   +-- web/
¦       +-- index.html
¦       +-- nutrition_data.js
¦       +-- model/
+-- version 2/
    +-- README.md
    +-- requirements.txt
    +-- v3_server.py
    +-- saved_model_experiment/
    ¦   +-- best_model_experiment.keras
    +-- web_v3/
        +-- index.html
        +-- nutrition_data.js
        +-- model/

## Technology Stack

- Python
- TensorFlow / Keras
- Flask
- Flask-CORS
- NumPy
- Pillow
- HTML
- JavaScript

## Important Note

The trained `.keras` model files are included because they are required by the Flask servers to perform predictions.

The original training dataset, virtual environments, cache files, and development-only files are intentionally not included in this repository.

## Running the Project

Each version has its own README.md containing the installation and execution instructions.
