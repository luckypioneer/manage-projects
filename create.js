module.exports = function(projectName) {
  if (projectName == null || projectName.trim() == "") {
    console.error("Enter the project name");
    return;
  }
  const fs = require("fs-extra");
  const projects = fs.readdirSync("./projects");
  if (projects.includes(projectName)) {
    console.error("The project is already exists");
    return;
  }
  fs.copySync("./projects/template", "./projects/" + projectName);
  console.log("Created " + projectName);
}
