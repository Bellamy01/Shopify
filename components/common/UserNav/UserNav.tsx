import { FC } from "react";
import s from "./UserNav.module.scss";
import Link from "next/link";

const UserNav:FC = ()=>{
    return (
        <nav>
            <ul className={s.item}>
                <li className={s.item}>Cart</li>
                <li className={s.item}>
                <Link href="/">
                    <a>Wishlist</a>
                </Link>
                </li>
            </ul>
        </nav>
    )
}

export default UserNav;