import getAllProductQuery from "../utils/queries/get-all-products";
import fetchApi from "../utils/queries/fetch-api";
import { ProductConnection } from "../schema";
import { normalizeProduct} from "../utils/normalize";
type ReturnType ={
    products: ProductConnection
}

const getAllProducts = async ():Promise<any>=>{
    const {data} = await fetchApi<ReturnType>({query:getAllProductQuery});
    //normalize and return new data!
    const products = data.products.edges.map(({node : product})=>{
        return product;
    }) ?? []
    return products;
}

export default getAllProducts;