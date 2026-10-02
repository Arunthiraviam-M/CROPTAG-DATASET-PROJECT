# CropTag — Version 1

CropTag Version 1 is an AI-based image classification web application for identifying Indian grains, millets, and pulses from images.

## Supported Classes

The model supports 38 food classes across three categories.

### Grains

* Barley
* Black Rice
* Bridegroom Rice
* Brown Rice
* Idli Rice
* Kichadi Samba Rice
* Parboiled Rice
* Ponni Rice
* Red Rice
* Sona Masoori Rice
* White Rice
* Wild Elephant Rice

### Millets

* Barnyard Millet
* Finger Millet
* Foxtail Millet
* Kodo Millet
* Little Millet
* Pearl Millet
* Proso Millet
* Quinoa
* Sorghum
* White Sorghum

### Pulses

* Black Gram
* Chickpeas
* Green Gram
* Horse Gram
* Masoor Dal
* Moth Bean
* Peas
* Red Kidney Bean
* Soya Bean
* Split Bengal Gram
* Split Moong Dal
* Thor Dal
* Toor Dal
* Urad Dal
* White Chickpeas
* Yellow Peas

## Technology Stack

### Backend

* Python
* Flask
* Flask-CORS
* TensorFlow
* NumPy
* Pillow

### Frontend

* HTML
* CSS
* JavaScript

## Model

The trained Keras model used by Version 1 is included in this repository.

**Model file:**

`saved_model_v2/best_model_v2.keras`

**Input image size:** `160 × 160`

The application provides:

* Predicted food class
* Class confidence
* Predicted category
* Category confidence

## Project Structure

```text
version 1/
├── README.md
├── requirements.txt
├── v2_server.py
├── saved_model_v2/
│   └── best_model_v2.keras
└── web/
    ├── index.html
    ├── nutrition_data.js
    └── model/
        └── .gitkeep
```

## Installation

From the `version 1` directory, install the required Python packages:

```bash
py -m pip install -r requirements.txt
```

## Run the Backend

Open a terminal in the `version 1` directory:

```bash
py v2_server.py
```

The Flask backend runs on:

`http://127.0.0.1:5001`

## Run the Frontend

Open another terminal:

```bash
cd web
py -m http.server 5500
```

Then open the application in a browser:

`http://127.0.0.1:5500`

## API

### Health Check

**GET `/`**

Example response:

```json
{
  "model": "GrainScan AI V2",
  "status": "running"
}
```

### Prediction

**POST `/predict`**

The endpoint accepts an image and returns the model prediction and confidence information.

## Workflow

```text
Input Image
     ↓
Web Frontend
     ↓
Flask API
     ↓
Image Preprocessing
     ↓
TensorFlow Model
     ↓
Class Prediction
     ↓
Category + Confidence
     ↓
Result Display
```

## Repository Notes

The `.keras` model file is required for local inference and is included in this repository.

Large datasets, virtual environments, cache files, reports, and development-only files are excluded using the root `.gitignore`.

This Version 1 folder is a clean deployment-ready copy of the working application.
