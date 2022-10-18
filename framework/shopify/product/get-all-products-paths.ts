import { ApiConfig } from "@common/types/api";
import { Product } from "@common/types/product";
import getAllProductPathsQuery from "@framework/utils/queries/get-all-products-paths";

type ReturnType = {
    products: Pick<Product,"slug">[]
}
const  getAllProductsPaths = async(config:ApiConfig):Promise<ReturnType> =>{

    const {data} = config.fetch({
        query:getAllProductPathsQuery,
        url:config.apiUrl
    });
    return {
        products:[
            {slug:"cool-hat"},
            {slug:"t-shirt"},
            {slug:"lightweight-jacket"}
        ]
    }
}

export default getAllProductsPaths;