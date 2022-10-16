import { FC } from "react";
import s from "./UserNav.module.scss";
import Link from "next/link";
import {Bag as Cart, Heart} from "@components/icons";
import { useUI } from "@components/common/ui/Context";

const UserNav:FC = ()=>{
    return (
        <nav>
            <ul className={s.item}>
                <li className={s.item}>
                    <Cart onClick={ui.setSideBarOpen}/>
                </li>
                <li className={s.item}>
                <Link href="/Wishlist">
                    <Heart/>
                </Link>
                </li>
            </ul>
        </nav>
    )
}

export default UserNav;