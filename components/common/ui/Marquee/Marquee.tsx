import { ReactNode, FC } from "react";
import s from "./Marquee.module.scss";

interface Props {
    children: ReactNode[]
}

const Marquee : FC<Props> = ({children})=>{
    return (
        <div className={s.root}>
            <div className={s.loop}>
                    <div className={s.container}>
                        {children}
                    </div>
            </div>
        </div>
    )
}

export default Marquee;