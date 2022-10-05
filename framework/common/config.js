const path = require("path");
const merge = require("deepmerge");
const fs = require("fs");
const prettier = require('prettier');

function withFrameworkConfig(defaultConfig={}){
    const framework = defaultConfig?.framework.name;
    if(!framework){
        throw new Error("The api framework is missing");
    } 
    const frameworkNextConfig = require(path.join("../",framework,"next.config"));
    const config = merge(defaultConfig, frameworkNextConfig);
    const tsPath = path.join(process.cwd(),"tsconfig.json");

    const tsConfig = require(path.join(process.cwd(),"tsconfig.json"));
    tsConfig.compilerOptions.paths["@framework"] = [`framework/${framework}`];
    tsConfig.compilerOptions.paths["@framework/*"] = [`framework/${framework}/*`];    //current working directory
    
    fs.writeFileSync(
        tsPath,
        prettier.format(
            JSON.stringify(tsConfig),{ parser : "json" }
        )
    );

    
    return config;
}

module.exports = { withFrameworkConfig };