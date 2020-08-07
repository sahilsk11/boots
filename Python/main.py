import speechEngine

def main():
  transcript = input("Enter your command: ")
  cleanedTranscript = speechEngine.cleanTranscript(transcript)
  response = speechEngine.parseTranscript(transcript)
  print(response)

if __name__ == "__main__":
  main()