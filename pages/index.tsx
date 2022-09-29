import { useEffect } from "react";

export async function getStaticProps() {
  const products = [1,2,3];
  return {
    props:{
      products
    },
    revalidate: 4 * 60 * 60; 
  }
}

export default function Home() {
  
   
  return (
    <div>
        Hello World
    </div>
  )
}
