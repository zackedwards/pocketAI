from transformers import pipeline
import pandas as pd

generator = pipeline("text-generation", model='EleutherAI/gpt-neo-2.7B')

prompt = "What is the plot of the movie Forrest Gump"

res = generator(prompt, max_length=250, do_sample=True, temperature=0.87)

print(res[0]['generated_text'])

