from penguin_back_end.domain.model import Penguin
from flask import Flask, request


def main():
    app = Flask(__name__)

    @app.route('/', methods=['GET'])
    def get_name() -> str:

        json_file = request.get_json()
        penguin = Penguin(name_of_friend=json_file['name'])

        penguin.think_of_sentence()
        sentence = penguin.say_sentence()
        print(json_file, sentence, penguin.name_of_friend)

        return sentence

    app.run(host="0.0.0.0", debug=True, port=8000)


if __name__ == '__main__':
    main()