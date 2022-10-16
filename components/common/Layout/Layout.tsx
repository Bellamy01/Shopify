
import { FC, ReactNode } from "react";
import s from "./Layout.module.css";
import {Footer} from "@components/common";
import {NavBar} from "@components/common";
import {SideBar} from "@components/common";
interface Props {
    children: ReactNode[]
}
const Layout: FC<Props> = ({children})=>{
    return (
        <div className={s.root}>
        <NavBar/>
        <SideBar>
            
        </SideBar>
        <main className="fit">
            { children }
        </main>
        <Footer/>
        </div>
        
    )
}

export default Layout;