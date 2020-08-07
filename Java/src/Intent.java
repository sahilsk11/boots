abstract class Intent {
  private String intentName;
  private String transcript;
  private String[] utterances;

  public Intent(String intentName, String transcript, String[] utterances) {
    this.intentName = intentName;
    this.transcript = transcript;
    this.utterances = utterances;
  }

  public boolean transcriptMatches(String transcript) {
    for (String utterance : this.utterances) {
      if (this.transcript.contains(utterance)) {
        return true;
      }
    }
    return false;
  }

  public abstract String execute();
}