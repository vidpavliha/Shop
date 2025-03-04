from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Sample product data
products = [
    {"id": 1, "name": "Smartphone", "price": 699, "image": "smartphone.jpg"},
    {"id": 2, "name": "Laptop", "price": 1299, "image": "laptop.jpg"},
    {"id": 3, "name": "Headphones", "price": 199, "image": "headphones.jpg"}
]

@app.route('/')
def home():
    return render_template('index.html', products=products)

@app.route('/cart', methods=['POST'])
def add_to_cart():
    data = request.get_json()
    return jsonify({"message": "Product added to cart", "product": data})

if __name__ == '__main__':
    app.run(debug=True)
