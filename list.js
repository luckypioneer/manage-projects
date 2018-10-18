module.exports = function() {
  const fs = require("fs-extra");
  const projects = fs.readdirSync("./projects").filter(project => {
    return project != "template";
  });
  console.log(projects.join("   "));
}
