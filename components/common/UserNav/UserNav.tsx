import { FC } from "react";
import s from "./UserNav.module.scss";
import Link from "next/link";

const UserNav:FC = ()=>{
    return (
        <nav>
            <ul className={s.item}>
                <li className={s.list}>Cart</li>
                <Link href="/">
                    <li className={s.list}>Wishlist</li>
                </Link>

            </ul>
        </nav>
    )
}

export default UserNav;