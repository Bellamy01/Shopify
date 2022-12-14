import "@assets/main.css";
import { AppProps } from "next/app";
import { FC,ReactNode } from "react";
import { UIProvider ,useUI} from "@components/common/ui/Context";
import {Layout} from "@components/common";

interface Props{
  children:ReactNode
}
const Noop : FC<Props> = ({children}) => <>{children}</>

function MyApp({Component, pageProps}:AppProps & {Component:{Layout: FC}}){

  const Layout = Component.Layout ?? Noop;
  const ui = useUI();
 
  return (
    <UIProvider>
      <Layout>
        <Component  {...pageProps}/>
      </Layout>
    </UIProvider>
  )
}

export default MyApp;