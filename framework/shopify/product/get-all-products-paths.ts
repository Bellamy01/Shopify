import { ApiConfig } from "@common/types/api";
import { Product } from "@framework/schema";

type ReturnType = {
    products: Pick<Product,"slug">[]
}
const  getAllProductPaths = async(config:ApiConfig):Promise<ReturnType> =>{
    return {
        products:[
            {slug:"cool-hat"},
            {slug:"t-shirt"},
            {slug:"lightweight-jacket"}
        ]
    }
}

export default getAllProductPaths;