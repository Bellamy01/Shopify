import getAllProductQuery from "../utils/queries/get-all-products";
import fetchApi from "../utils/queries/fetch-api";
import { ProductConnection } from "../schema";
import { normalizeProduct} from "../utils/normalize";
import { Product } from "../../common/types/product";
type ReturnType ={
    products: ProductConnection
}

const getAllProducts = async ():Promise<Product[]>=>{
    const {data} = await fetchApi<ReturnType>({query:getAllProductQuery});
    //normalize and return new data!
    const products = data.products.edges.map(({node : product})=>
        normalizeProduct(product)
    ) ?? []
    return products;
}

export default getAllProducts;