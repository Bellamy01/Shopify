import {FC} from "react";
import { Container } from "@components/common/ui";
import Link from "next/link";
import { UserNav } from "@components/common";
import s from "./NavBar.module.scss";

const NavBar = ()=>{
    return(
        <Container>
            <div className={s.root}>
                <div className={s.main}>
                    <Link href="/">
                    <a className={s.logo}>
                        bel store
                    </a>
                </Link>
                <nav className={s.nav}>
                    <Link href="/">
                        <a className={s.link}>All</a>
                    </Link>
                    <Link href="/">
                        <a className={s.link}>Clothes</a>
                    </Link>
                    <Link href="/">
                        <a className={s.link}>Accessories</a>
                    </Link>
                    <Link href="/">
                        <a className={s.link}>Shoes</a>
                    </Link>
                </nav>
                <div className={s.user}>
                    <UserNav/>
                </div>
                </div>
            </div>
        </Container>
    )
}

export default NavBar;