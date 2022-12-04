import json

import attr
from penguin_back_end.random_sentence_generator.sentence_generator import SentenceGenerator


@attr.s
class Penguin:
    name_of_friend: str
    sentence: str = None

    def think_of_sentence(self):
        generator = SentenceGenerator(self.name_of_friend)
        self.sentence = generator.choose_sentence()

    def say_sentence(self) -> str:
        content = {"sentence": self.sentence}
        json_string = json.dumps(content)
        return json_string




