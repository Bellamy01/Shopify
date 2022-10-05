
import { InferGetStaticPropsType } from "next";
import getAllProducts from "@framework/product/get-all-products";
import { getConfig } from "@framework/api/config";
export async function getStaticProps() {
  const config = getConfig();
  console.log(config.apiUrl);
  
  const products = await getAllProducts();
  return {  
    props:{
      products
    },
    revalidate: 4 * 60 * 60
  }
}

export default function Home({
  products}:InferGetStaticPropsType<typeof getStaticProps>)  
  {
  
  getAllProducts();
  
    return (
    <div>
      {JSON.stringify(products)}
    </div>
  )
}