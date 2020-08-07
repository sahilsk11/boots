const { Intent } = require("../intent.js"); //load parent class

class HelloIntent extends Intent {
  constructor({ transcript }) {
    //invoke parent's constructor
    super({
      transcript,
      utterances: ["hello", "hi", "hey", "are you there"],
      intentName: "helloIntent"
    });
  }

  async execute() {
    return "Hello, I am here!";
  }
}

module.exports = {
  IntentClass: HelloIntent //change the name during export so that we can invoke from another file
}; 

/**
 * We change the name in the export so that we can invoke from another file
 * without actually knowing what the name is. This is useful when we are
 * iterating through a list of files, and don't know the name of the class
 * defined within the file.
 * 
 * We could use the filename to figure out the name of the class, but invoking
 * it would require dynamic code. e.g.
 * 
 * const class = new file.HelloIntent()
 *                          ^^^^
 *                      when iterating through files,
 *                      we won't know the class name.
 *                      We would need dynamic variables to 
 *                      hold custom class names.
 */