# CropTag — Version 2

CropTag Version 2 is an experimental version of the CropTag image classification application for identifying Indian grains, millets, and pulses from images.

This version uses an updated trained model and a separate Flask backend and frontend from Version 1.

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

Version 2 uses the trained Keras model included in this repository.

**Model file:**

`saved_model_experiment/best_model_experiment.keras`

**Input image size:** `160 × 160`

The application provides image-based food classification results with confidence information.

## Project Structure

```text id="1e7a9c"
version 2/
├── README.md
├── requirements.txt
├── v3_server.py
├── saved_model_experiment/
│   └── best_model_experiment.keras
└── web_v3/
    ├── index.html
    ├── nutrition_data.js
    └── model/
        └── .gitkeep
```

## Installation

From the `version 2` directory, install the required Python packages:

```bash id="e1f8v3"
py -m pip install -r requirements.txt
```

## Run the Backend

Open a terminal in the `version 2` directory:

```bash id="y7d4p2"
py v3_server.py
```

The Flask backend runs on:

`http://127.0.0.1:5002`

## Run the Frontend

Open another terminal:

```bash id="f8r2x1"
cd web_v3
py -m http.server 5500
```

Then open the application:

`http://127.0.0.1:5500`

## API

### Health Check

**GET `/`**

The endpoint confirms that the Version 2 backend and model are running.

### Prediction

**POST `/predict`**

The endpoint accepts an image and returns the model's prediction and confidence information.

## Workflow

```text id="3z4x8q"
Input Image
     ↓
Web Frontend
     ↓
Flask API
     ↓
Image Preprocessing
     ↓
Version 2 TensorFlow Model
     ↓
Classification
     ↓
Confidence Information
     ↓
Result Display
```

## Version 2 Purpose

Version 2 is maintained separately from Version 1 so that the updated model, backend implementation, and frontend can be tested without changing the stable Version 1 implementation.

Both versions are independently runnable.

## Repository Notes

The `.keras` model file is required for local inference and is included in this repository.

Large datasets, virtual environments, cache files, reports, and development-only files are excluded using the root `.gitignore`.

This Version 2 folder is a clean copy of the working experimental application.
