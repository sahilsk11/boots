import requests
import os

def cleanTranscript(transcript):
  cleanedTranscript = lower(transcript)
  changes = {
      "give me a call": "give me a quote"
  }
  for original in changes:
    updated = changes[original]
    cleanedTranscript.replaceAll(original, updated)
  return cleanedTranscript

def parseTranscript(transcript):
  files = os.listdir("./intents")
  for f in files:
    return
