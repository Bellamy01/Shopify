import { ApiConfig } from "@common/types/api";



const getProduct = async(config:ApiConfig) : Promise<any>=>{
    return {
        product:{
            name:"fgwe",
            slug:"fw"
        }
    }
}

export default getProduct;