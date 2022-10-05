import getAllProductQuery from "../utils/queries/get-all-products";
import {fetchApi} from "../utils";
import { ProductConnection } from "../schema";
import { normalizeProduct} from "../utils/normalize";
import { Product } from "@common/types/product";
import {ApiConfig} from ""

type ReturnType ={
    products: ProductConnection
}

const getAllProducts = async ():Promise<Product[]>=>{
    const {data} = await fetchApi<ReturnType>({
        url:ApiConfig,
        query:getAllProductQuery});
    //normalize and return new data!
    const products = data.products.edges.map(({node : product})=>
        normalizeProduct(product)
    ) ?? []
    return products;
}

export default getAllProducts;