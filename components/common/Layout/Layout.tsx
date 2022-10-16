
import { FC, ReactNode } from "react";
import s from "./Layout.module.css";
import {Footer} from "@components/common";
import {NavBar} from "@components/common";
import {SideBar} from "@components/common";
import {CartSide} from "@components/cart";
import { useUI } from "../ui/Context";

interface Props {
    children: ReactNode[]
}
const Layout: FC<Props> = ({children})=>{
    const ui = useUI();
    return (
        <div className={s.root}>
        <NavBar/>
        <SideBar isOpen={ui.isSideBarOpen}>
        <CartSide/>
        </SideBar>
        <main className="fit">
            { children }
        </main>
        <Footer/>
        </div>
        
    )
}

export default Layout;