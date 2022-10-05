import { fetchApi } from "@framework/utils";

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
    apiUrl:"http://local"
})