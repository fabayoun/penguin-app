import random

from penguin_back_end.random_sentence_generator.sentences import SENTENCES


class SentenceGenerator:
    def __init__(self, input_name: str):
        self.input_name = input_name
        self.sentences = SENTENCES

    def choose_sentence(self) -> str:
        sentence = random.choice(self.sentences)
        return sentence.replace("generic-name", self.input_name)
