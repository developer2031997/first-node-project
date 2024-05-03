const fs = require("fs");

function logReqRes(fileName){

    return (req, res, next) => {
        fs.appendFile(
            fileName,
          `\n ${Date.now()} : ${req.ip} : ${req.method} : ${req.path} \n`,
          (err) => {
            // Provide a callback function here
            if (err) {
              console.error("Error appending to log file:", err);
            }
          }
        );
        next(); 
      }

}

module.exports = {
    logReqRes
}
