module.exports = function(projectName) {
  const fs = require("fs-extra");
  const projects = fs.readdirSync("./projects");
  if (!projects.includes(projectName)) {
    console.error("The project is not exists");
    return;
  }
  fs.writeFile("./current-project", projectName, function(err) {
    if (err) {
      console.error(err);
      return;
    }
    const openWebsites = require("./openWebsites.js");
    openWebsites();
    console.log("Changed project");
  });
}
