class Intent {
  constructor({ intentName, transcript, utterances }) {
    this.intentName = intentName;
    this.transcript = transcript
    this.intentDefinition = {
      utterances
    }
  }

  //parent method that each sub class can safely invoke
  transcriptMatches() {
    for (const utterance of this.intentDefinition.utterances) {
      if (this.transcript.includes(utterance)) {
        return true;
      }
    }
    return false;
  }

  //Method must be overridden in all sub classes
  execute() {
    throw new Error("The execute method has not been defined for this class.");
  }
}

module.exports = { Intent };