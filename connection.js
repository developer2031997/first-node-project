const mongoose = require("mongoose");

function connectMangoDb(url) {
  return mongoose
    .connect(url)
    .then(() => console.log("MangoDb Connected"))
    .catch((err) => console.log("error", err));
};

module.exports = {
    connectMangoDb,
}
