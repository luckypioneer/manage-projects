
const command = process.argv[2];
const fs = require("fs-extra");

try {
  fs.statSync("./current-project")
} catch(err) {
  fs.writeFileSync("./current-project", "");
}

if (command == "create") {
	const createProject = require("./create.js");
	createProject(process.argv[3]);
  return;
}

if (command == "set") {
	const setProject = require("./set.js");
	setProject(process.argv[3]);
  return;
}

if (command == "reset") {
  const resetProject = require("./reset.js");
  resetProject();
  return;
}

if (command == "remove") {
  const removeProject = require("./remove.js");
  removeProject(process.argv[3]);
  return;
}

if (command == "list") {
  const list = require("./list.js");
  list();
  return;
}

if (command == "current") {
  const current = require("./current.js");
  current();
  return;
}

if (command == "open-websites") {
	const openWebsites = require("./openWebsites.js");
	openWebsites();
  return;
}

if (command == "edit-websites") {
	const editWebsites = require("./editWebsites.js");
	editWebsites();
  return;
}

console.error("The command is not valid");
