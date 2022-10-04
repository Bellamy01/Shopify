const path = require("path");

function withFrameworkConfig(defaultConfig={}){
    const framework = "shopify";

    const frameworkNextConfig = require(path.join("../",framework,"next.config"));
}