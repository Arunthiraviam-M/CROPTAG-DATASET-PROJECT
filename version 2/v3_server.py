from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
from PIL import Image
import os

app = Flask(__name__)
CORS(app)

MODEL_PATH = os.path.join(
    os.path.dirname(__file__),
    "saved_model_experiment",
    "best_model_experiment.keras"
)

IMG_SIZE = 160

CLASS_NAMES = [
    "Barley", "Black Rice", "Bridegroom Rice", "Maize",
    "Oats", "Paddy", "Parboiled Rice", "Ponni Rice",
    "Red Rice", "Seeraga Samba Rice", "Wheat",
    "Wild Elephant Rice", "Barnyard Millet", "BrownTop Millet",
    "Finger Millet", "Foxtail Millet", "Kodo Millet",
    "Little Millet", "Pearl Millet", "Proso Millet", "Quinoa",
    "Red Sorghum", "White Sorghum", "Black Chickpeas",
    "Black Eyed Pea", "Black Gram", "Chana Dal", "Field Bean",
    "Green Gram", "Horse Gram", "Mysore Dal", "Peas", "Rajma",
    "Soya Bean", "Split Moong Dal", "Thor Dal",
    "White Chickpeas", "Whole White Gram"
]

CATEGORY_NAMES = [
    "Grain",
    "Millet",
    "Pulse"
]

print("Loading V3 Experiment model...")
model = tf.keras.models.load_model(MODEL_PATH)
print("V3 Experiment model loaded successfully.")


@app.route("/")
def home():
    return jsonify({
        "status": "running",
        "model": "GrainScan AI V3 Experiment"
    })


@app.route("/predict", methods=["POST"])
def predict():

    if "image" not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    try:
        image = Image.open(
            request.files["image"].stream
        ).convert("RGB")

        image = image.resize((IMG_SIZE, IMG_SIZE))

        image_array = np.asarray(
            image,
            dtype=np.float32
        )

        image_array = np.expand_dims(
            image_array,
            axis=0
        )

        predictions = model.predict(
            image_array,
            verbose=0
        )

        class_output = np.asarray(
            predictions["class_output"]
        )

        category_output = np.asarray(
            predictions["category_output"]
        )

        print("Class output shape:", class_output.shape)
        print("Category output shape:", category_output.shape)

        class_probabilities = class_output[0]
        category_probabilities = category_output[0]

        predicted_class_index = int(
            np.argmax(class_probabilities)
        )

        predicted_category_index = int(
            np.argmax(category_probabilities)
        )

        return jsonify({
            "prediction": CLASS_NAMES[predicted_class_index],
            "confidence": round(
                float(class_probabilities[predicted_class_index]) * 100,
                2
            ),
            "class_index": predicted_class_index,
            "category": CATEGORY_NAMES[predicted_category_index],
            "category_confidence": round(
                float(category_probabilities[predicted_category_index]) * 100,
                2
            )
        })

    except Exception as e:
        print("PREDICTION ERROR:", repr(e))

        return jsonify({
            "error": str(e)
        }), 500


if __name__ == "__main__":
    print("Starting V3 Experiment server...")
    print("Open http://127.0.0.1:5002")

    app.run(
        host="127.0.0.1",
        port=5002,
        debug=False
    )