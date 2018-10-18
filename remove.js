module.exports = function(projectName) {
  if (projectName == "template") {
    console.error("The project can't be removed");
    return;
  }
  const fs = require("fs-extra");
  const projects = fs.readdirSync("./projects");
  if (!projects.includes(projectName)) {
    console.error("The project is already removed or not exists");
    return;
  }
  const currentProjectName = fs.readFileSync("./current-project", "utf-8");
  if (currentProjectName == projectName) {
    fs.writeFileSync("./current-project", "");
  }
  fs.remove("./projects/" + projectName, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("The project is removed");
  });
}
