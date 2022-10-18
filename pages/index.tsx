
import { InferGetStaticPropsType } from "next";
import {getAllProducts} from "@framework/product";
import { getConfig } from "@framework/api/config";
import { Layout } from "@components/common";
import { ProductCard } from "@components/common/product/ProductCard";
import { Grid, Marquee,Hero} from "@components/common/ui";


export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config );
  return {  
    props:{
      products
    },0
    revalidate: 4 * 60 * 6
  }
}

export default function Home({
  products}:InferGetStaticPropsType<typeof getStaticProps>)  
  {
  return (
    <>
      <Grid layout="A">
        {products.slice(0,3).map(product =>
        <ProductCard
          key={product.id}
          product={product}
          variant= "simple"
        />  
      )}
      </Grid>
      <Hero
        headline= "Coffee, icecream and water melon"
        description="Ice cream is a mixture of milk, cream, sugar, and sometimes other ingredients that has been frozen into a soft, creamy delight using special techniques. Ice cream has been a popular treat for hundreds of years but has only become commonplace since the widespread use of refrigeration. The exploding popularity of ice cream has led to a number of ice-cream variations including frozen custard, frozen yogurt, and even non-dairy versions made with ingredients like coconut milk."
      />
      <Marquee variant="primary">
        {products.slice(0,3).map(product =>
        <ProductCard
          key={product.id}
          product={product}
          variant = "slim"
        />  
        )}
      </Marquee>
      <Grid layout="B">
        {products.slice(0,3).map(product =>
        <ProductCard
          key={product.id}
          product={product}
          variant="simple"
        />  
      )}
      </Grid>
      <Marquee variant="secondary">
        {products.slice(0,3).map(product =>
        <ProductCard
          key={product.id}
          product={product}
          variant = "slim"
        />  
        )}
      </Marquee>
    </>
  )
} 

Home.Layout = Layout; 