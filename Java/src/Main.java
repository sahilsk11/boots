import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    System.out.print("Enter your command: ");
    Scanner in = new Scanner(System.in);
    //SpeechEngine s = new SpeechEngine();
    String transcript = in.nextLine();
    System.out.println(transcript);
  }
}