module.exports = function() {
  const fs = require("fs-extra");
  fs.writeFile("./current-project", "", function(err) {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Did reset");
  });

}
