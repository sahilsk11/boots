import java.io.*;
import java.util.ArrayList;
import java.util.HashMap;

class SpeechEngine {
  public static String cleanTranscript(String transcript) {
    String cleanedTranscript = transcript.toLowerCase();
    HashMap<String, String> changes = new HashMap<String, String>();
    initializeMap(changes);
    for (String original : changes.keySet()) {
      String updated = changes.get(original);
      cleanedTranscript.replaceAll(original, updated);
    }
    return cleanedTranscript;
  }

  public static void initializeMap(HashMap<String, String> map) {
    map.put("give me a call", "give me a quote");
  }

  public static String parseTranscript(String transcript) {
    ArrayList<Intent> intents = new ArrayList<Intent>();
    File[] intentFiles = new File("./intents").listFiles();
    for (File fileName : intentFiles) {
      try {
        FileInputStream fin = new FileInputStream(fileName);
        ObjectInputStream ois = new ObjectInputStream(fin);
        Intent intentObj = (Intent) ois.readObject();
      } catch (FileNotFoundException fe) {

      } catch (IOException e) {

      } catch (ClassNotFoundException e) {

      }
    }
    return "";
  }
}