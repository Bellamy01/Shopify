
import { InferGetStaticPropsType } from "next";
import getAllProducts from "@framework/product/get-all-products";
import { getConfig } from "@framework/api/config";
import { Layout } from "@components/common";
import { ProductCard } from "@components/common/product/ProductCard";
import Link from "next/link";
import { Grid } from "@components/common/ui";
import {Hero} from "@components/common/ui";
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
      <Hero
        headline= "Coffee, icecream and water melon"
        description="Ice cream is a mixture of milk, cream, sugar, and sometimes other ingredients that has been frozen into a soft, creamy delight using special techniques. Ice cream has been a popular treat for hundreds of years but has only become commonplace since the widespread use of refrigeration. The exploding popularity of ice cream has led to a number of ice-cream variations including frozen custard, frozen yogurt, and even non-dairy versions made with ingredients like coconut milk."
      />
    </>
  )
} 

Home.Layout = Layout; 