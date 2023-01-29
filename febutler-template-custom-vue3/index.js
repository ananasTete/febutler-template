console.log("custom-vue3");
const fse = require("fs-extra");
const inquirer = require("inquirer");

function install(options) {
  try {
    const { projectInfo, sourcePath, targetPath } = options;
    fse.ensureDirSync(sourcePath);
    fse.ensureDirSync(targetPath);
    fse.copySync(sourcePath, targetPath);
  } catch (error) {
    throw new Error(error);
  }
}
