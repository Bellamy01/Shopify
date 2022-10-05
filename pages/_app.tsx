import { AppProps } from "next/app";
import { Layout } from "@components/common";

function MyApp({Component, pageProps}:AppProps){

  return (
    <div className="app-component">
      <Layout>
        <Component  {...pageProps}/>
      </Layout>
    </div>
  )
}

export default MyApp;