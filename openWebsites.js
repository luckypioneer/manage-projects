module.exports = function() {
  const fs = require("fs-extra");
  const projectName = fs.readFileSync("./current-project", "utf-8");
  if (projectName.trim() == "") {
    console.error("Current project is not set");
    return;
  }

  const urls = fs.readFileSync("./projects/" + projectName + "/websites", "utf-8").split("\n");
  urls.forEach(url => {
    require("openurl").open(url);
  });
}
