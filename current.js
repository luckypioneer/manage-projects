module.exports = function() {
  const fs = require("fs-extra");
  const project = fs.readFileSync("./current-project", "utf-8");
  console.log(project);
}
