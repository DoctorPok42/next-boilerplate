import { readdirSync } from "fs";

// Get all modules in the current directory
const main = async () => {
  const modules = readdirSync(__dirname);
  let modulesList = [] as any;

  modules.forEach((module) => {
    if (module === "index.ts") return;
    let modulePath = `./${module.split(".")[0]}`;
    let moduleImport = require(modulePath);
    modulesList.push(moduleImport);
  });

  return modulesList;
};

main();
