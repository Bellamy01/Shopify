import { FC, ReactNode } from "react";
import s from "./Grid.module.css";

interface Props {
    children: ReactNode[]
    layout?:"A" | "B"
}

const Grid:FC<ReactNode> = ({children})=> {
    return (
        <div className={s.root}>
            {children}
        </div>
    )
}

export default Grid;