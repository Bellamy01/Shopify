import getAllProductQuery from "../utils/queries/get-all-products";
import {fetchApi} from "../utils";
import { ProductConnection } from "../schema";
import { normalizeProduct} from "../utils/normalize";
import { Product } from "@common/types/product";
import {ApiConfig} from "@common/types/api";


type ReturnType ={
    products: ProductConnection
}

const getAllProducts = async (config:ApiConfig):Promise<Product[]>=>{
    const {data} = await config.fetch<ReturnType>({
        url:config.apiUrl,
        query:getAllProductQuery});
    //normalize and return new data!
    const products = data.products.edges.map(({node : product})=>
        normalizeProduct(product)
    ) ?? []
    return products;
}

export default getAllProducts;