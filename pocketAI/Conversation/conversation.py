import os
import openai
from time import time,sleep
import speech_recognition
import pyttsx3 as tts
import sys

recognizer = speech_recognition.Recognizer()

speaker = tts.init()
speaker.setProperty('rate', 145)

def open_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as infile:
        return infile.read()


def save_convo(text, topic):
    with open('pocketAI/Conversation/convos/%s_%s.txt' % (topic, time()), 'w', encoding='utf-8') as outfile:
        outfile.write(text)


openai.api_key = open_file('openaiapikey.txt')


def gpt3_completion(prompt="You: What is your favorite university?", engine='text-davinci-002', temperature=0.7, top_p=1, max_tokens=150, frequency_penalty=0, presence_penalty=0, stop=["You:", "pocketAI:"]):
    max_retry = 5
    retry = 0
    while True:
        try:
            response = openai.Completion.create(
                model="text-davinci-002",
                prompt="You: What is your favorite university?",
                temperature=0.7,
                max_tokens=150,
                top_p=1,
                frequency_penalty=0,
                presence_penalty=0,
                stop=["You:", "pocketAI:"]
                )
            text = response['choices'][0]['text'].strip()
            filename = '%s_gpt3.txt' % time()
            with open('pocketAI/Conversation/gpt3_logs/%s' % filename, 'w') as outfile:
                outfile.write('PROMPT:\n\n' + prompt + '\n\n==========\n\nRESPONSE:\n\n' + text)
            return text
        except Exception as oops:
            retry += 1
            if retry >= max_retry:
                return "GPT3 error: %s" % oops
            print('Error communicating with OpenAI:', oops)
            sleep(1)


if __name__ == '__main__':
    for i in range(0, 4):
        topics = open_file('pocketAI/Conversation/topics.txt').splitlines()
        for topic in topics:
            print(topic)
            prompt = open_file('pocketAI/Conversation/prompt.txt').replace('<<TOPIC>>', topic)
            response = gpt3_completion(prompt)
            outtext = 'pocketAI: %s' % response
            print(outtext)
            tpc = topic.replace(' ', '')[0:15]
            save_convo(outtext, tpc)
            #exit()




