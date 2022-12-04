import json

import attr
import requests

from penguin_back_end.random_sentence_generator.sentence_generator import SentenceGenerator

@attr.dataclass
class Penguin:
    name_of_friend: str
    sentence: str = None

    def think_of_sentence(self):
        generator = SentenceGenerator(self.name_of_friend)
        sentence = generator.choose_sentence()
        self.sentence = sentence + self.add_suggestion()

    def add_suggestion(self):
        response = requests.get("https://www.boredapi.com/api/activity")
        response_dict = json.loads(response.text)
        activity = response_dict['activity'].lower().replace(" you ", f" {self.name_of_friend} ").replace(" your ", f" {self.name_of_friend}'s ").replace(" have ", " has ").replace(" haven't ", " hasn't ")
        return f" Maybe {self.name_of_friend} should {activity}"

    def say_sentence(self) -> str:
        content = {"sentence": self.sentence}
        json_string = json.dumps(content)
        return json_string






