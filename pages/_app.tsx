import { AppProps } from "next/app";
import { }
import { Layout } from "@components/common";

function MyApp({Component, pageProps}:AppProps & {Component:{Layout}}){

  const Layout = Component.Layout;
  return (
    <div className="app-component">
      <>
        <Component  {...pageProps}/>
      </>
    </div>
  )
}

export default MyApp;