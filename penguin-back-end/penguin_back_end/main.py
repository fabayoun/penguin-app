from penguin_back_end.domain.model import Penguin
from flask import Flask, request
from flask_cors import CORS


def main():
    app = Flask(__name__)
    CORS(app)

    @app.route('/', methods=['PUT'])
    def get_name() -> str:
        json_file = request.get_json()
        penguin = Penguin(name_of_friend=json_file['name'])
        penguin.think_of_sentence()
        sentence = penguin.say_sentence()
        return sentence



    app.run(host="0.0.0.0", debug=True, port=8000)


if __name__ == '__main__':
    main()