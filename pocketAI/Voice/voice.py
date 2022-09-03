import openai
import pyttsx3
import speech_recognition as sr
import os
from time import time,sleep


def open_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as infile:
        return infile.read()


openai.api_key = open_file('openaiapikey.txt')

engine = pyttsx3.init()
# voices = engine.getProperty('voices')
# print(voices)
# engine.setProperty('voice', voices[1].id)

r= sr.Recognizer()
mic = sr.Microphone(device_index=2)


conversation = ""
user_name = "Austin"

while True:
    with mic as source:
        print("\nlistening... speak clearly into mic.")
        r.adjust_for_ambient_noise(source, duration=0.7)
        audio = r.listen(source)
    print("no longer listening.\n")

    try:
        user_input = r.recognize_google(audio)
    except:
        continue

    prompt = user_name + ": " + user_input + "\n Morgan:"

    conversation += prompt

    response = openai.Completion.create(engine='text-davinci-002', prompt=conversation, max_tokens=100, temperature=0.69, top_p=1, frequency_penalty=0, presence_penalty=0)
    response_str = response["choices"][0]["text"].replace("\n", "")
    response_str = response_str.split(user_name + ": ", 1)[0].split("Morgan: ", 1)[0]


    conversation += response_str + "\n"
    print(response_str)

    engine.say(response_str)
    engine.runAndWait()