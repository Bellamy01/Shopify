
import { InferGetStaticPropsType } from "next";
import getAllProducts from "@framework/product/get-all-products";
import { getConfig } from "@framework/api/config";
import { Layout } from "@components/common";
import { ProductCard } from "@components/common/product/ProductCard";
import Link from "next/link";
import { Grid } from "@components/common/ui";

export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config );
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
  return (
    <>
      <Grid>
        {products.slice(0,3).map(product =>
        <ProductCard
          key={product.id}
          product={product}
        />  
      )}
      </Grid>
    </>
  )
} 

Home.Layout = Layout; 