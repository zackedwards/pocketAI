import os
import openai
from time import time,sleep


def open_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as infile:
        return infile.read()


def save_convo(text, query):
    with open('pocketAI/Text_Generator/generations/%s_%s.txt' % (query, time()), 'w', encoding='utf-8') as outfile:
        outfile.write(text)


openai.api_key = open_file('openaiapikey.txt')


def gpt3_completion(prompt="Brainstorm some ideas combining VR and fitness:\n\n", engine='text-davinci-002', temperature=0.6, top_p=1, max_tokens=1000, frequency_penalty=1, presence_penalty=1):
    max_retry = 5
    retry = 0
    while True:
        try:
            response = openai.Completion.create(
                model="text-davinci-002",
                prompt="Brainstorm some ideas combining VR and fitness:\n\n",
                temperature=0.6,
                max_tokens=1000,
                top_p=1,
                frequency_penalty=1,
                presence_penalty=1
                )
            text = response['choices'][0]['text'].strip()
            filename = '%s_gpt3.txt' % time()
            with open('pocketAI/Text_Generator/gpt3_logs/%s' % filename, 'w') as outfile:
                outfile.write(prompt + '\n\n==========\n\nRESPONSE:\n\n' + text)
            return text
        except Exception as oops:
            retry += 1
            if retry >= max_retry:
                return "GPT3 error: %s" % oops
            print('Error communicating with OpenAI:', oops)
            sleep(1)


if __name__ == '__main__':
    for i in range(0, 4):
        queries = open_file('pocketAI/Text_Generator/query.txt').splitlines()
        for query in queries:
            print(query)
            prompt = open_file('pocketAI/Text_Generator/prompt.txt').replace('<<QUERY>>', query)
            response = gpt3_completion(prompt)
            outtext = '%s' % response
            print(outtext)
            qry = query.replace(' ', '')[0:15]
            save_convo(outtext, qry)
            #exit()


