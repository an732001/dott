const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
const options = { useNewUrlParser: true };
mongoose.connect(
  //"mongodb://localhost:27017/EdgeStorage",
  "mongodb+srv://ShaanG57:1234@dottcluster-byzii.gcp.mongodb.net/test?retryWrites=true&w=majority",
  options,
  function(error) {
    if (error) {
      console.log(error);
    }
  }
);

module.exports = { mongoose };
