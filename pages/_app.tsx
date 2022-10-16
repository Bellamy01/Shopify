import "@assets/main.css";
import { AppProps } from "next/app";
import { FC } from "react";
import { Layout } from "@components/common";
import { UIProvider } from "@components/common/ui/Context";


const Noop : FC = ({children}) => <>{children}</>

function MyApp({Component, pageProps}:AppProps & {Component:{Layout: FC}}){

  const Layout = Component.Layout ?? Noop;
 
  return (
    <UIProvider>
      <Layout>
        <Component  {...pageProps}/>
      </Layout>
    </UIProvider>
  )
}

export default MyApp;