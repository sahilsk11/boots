const prompt = require('prompt-sync')({ sigint: true });
const speechEngine = require('./speechEngine');

async function main() {
  const transcript = prompt("Enter your command: ");
  const cleanedTranscript = speechEngine.cleanTranscript(transcript);
  const response = await speechEngine.parseTranscript(transcript);
  console.log(response);
}

main();