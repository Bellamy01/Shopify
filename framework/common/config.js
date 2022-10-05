const path = require("path");
const merge = require("deepmerge");
const fs = require("fs");


function withFrameworkConfig(defaultConfig={}){
    const framework = "bigcommerce";

    const frameworkNextConfig = require(path.join("../",framework,"next.config"));
    const config = merge(defaultConfig, frameworkNextConfig);
    const tsPath = path.join(process.cwd(),"tsconfig.json");

    const tsConfig = require(path.join(process.cwd(),"tsconfig.json"));
    tsConfig.compilerOptions.paths["@framework"] = [`framework/${framework}`];
    tsConfig.compilerOptions.paths["@framework/*"] = [`framework/${framework}`];    //current working directory
    
    fs.writeFileSync(tsPath,
        JSON.stringify(
            tsConfig,null,2
        )
    );

    
    return config;
}

module.exports = { withFrameworkConfig };