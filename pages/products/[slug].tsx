import { Layout } from "@components/common";
import { getConfig } from "@framework/api/config";
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import {getProduct,getAllProductsPaths} from "@framework/product";    


//fecth all of the product slugs
export const getStaticPaths : GetStaticPaths = async()=>{
    const config = getConfig();
    const {products} = await getAllProductsPaths(config); 
    return {
        paths:products.map(p=>({params:{slug:p.slug}})),
        fallback: false
    }
}
//provide specific data to the page
export const getStaticProps = async({
    params}:GetStaticPropsContext<{slug:string}>)=>{

        const config = getConfig();
        const {product} = await getProduct(config);
    return{
        props:{
           product
        }
    }
}
export default function ProductSlug({
    product}:InferGetStaticPropsType<typeof getStaticProps>){
    return(
        <div>
            {product.name}
            {product.slug}
        </div>
    )
}


ProductSlug.Layout = Layout;