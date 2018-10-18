# manage-projects
This tool makes our machine environment change and work easier a little. 
For example, you are a freelance engineer. you have a work of company A, and a work of company B. 
If you set working project A, Your terminal will start in the state that current directory is project A workspace

This tool currently has three features.
1. It open websites what your work needs when terminal is opened.
2. Current directory will be working directory when you will open a terminal.
3. You can start up the environment of your work by one command.

## What software it needs 
* docker, docker-compose
* node.js v10.12.0

## Supporting environment
* Ubuntu ( bash )

## How to install

1. add the command to .bashrc
```
export MANAGE_PROJECTS_PATH=/path/to/the/repository
export PATH=$PATH:$MANAGE_PROJECTS_PATH/commands
project=`ws current`
if [[ $project != "" ]]; then
  cd $MANAGE_PROJECTS_PATH/projects/$project/workspace
  ws open-websites > /dev/null 2>&1
fi
alias wscd="cd $MANAGE_PROJECTS_PATH/projects/\`ws current\`/workspace"
```

2. npm install
```
cd $MANAGE_PROJECTS_PATH
npm install
```

## How to use

### create project and workspace
```
ws create {project name}
```

### set current project
```
ws set {project name}
```

### reset current project
```
ws reset
```

### check project list
```
ws list
```

### check current project
```
ws current
```

### open websites
```
ws open-websites
```
