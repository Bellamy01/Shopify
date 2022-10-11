import { ReactNode, FC } from "react";
import s from "./Marquee.module.scss";


interface Props {
    children: ReactNode[]
}

const Marquee : FC<Props> = ({children})=>{
    return (
        <div className={s.root}>
            {children}
        </div>
    )
}

export default Marquee;