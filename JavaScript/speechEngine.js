const axios = require('axios');
const fs = require('fs');

function cleanTranscript(transcript) {
  let cleanedTranscript = transcript.toLowerCase();
  const changes = {
    "give me a call": "give me a quote",
  }
  for (const original of Object.keys(changes)) {
    const updated = changes[original];
    cleanedTranscript.replace(original, updated);
  }
  return cleanedTranscript;
}

async function parseTranscript(transcript) {
  const files = fs.readdirSync("./intents");
  for (const file of files) {
    if (file !== ".DS_Store") {
      const className = require("./intents/" + file); //gets the name of the file in which the class is defined
      const intentObj = new className.IntentClass({ transcript }); //creates a new instance of the class
      if (intentObj.transcriptMatches()) {
        return await intentObj.execute();
      }
    }
  }
  return { code: 400, message: "Unknown Intent" }
}

async function generateSpeechFile(message) {
  const apiKey="";
  const url = `https://boots.sahilkapur.com/generateSpeech?apiKey=${apiKey}&message=${message}`;
  const response = await axios.get(endpoint);
  const fileName = response.data.fileName;
  return fileName;
}

module.exports = {
  cleanTranscript,
  parseTranscript
}