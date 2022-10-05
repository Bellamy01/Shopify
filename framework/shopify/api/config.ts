import { fetchApi } from "@framework/utils";
import { config } from "process";

class Config {
    private config: any 

    constructor(config:any){
        this.config = config
    }
    getConfig(){
        return this.config
    }
}

const configWrapper = new Config({
    apiUrl:"http://localhost:4000/graphql",
    fetch: fetchApi
})

export function getConfig(){
    return configWrapper.getConfig()
}