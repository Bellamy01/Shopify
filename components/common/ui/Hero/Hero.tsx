import {FC} from "react";
import s from "./Hero.module.scss";
import Link from  

interface Props{
    headline: string,
    description:string
}

const Hero : FC<Props> = ({headline,description})=>{
    return (
        <div className="bg-black">
            <div className={s.root}>
                <h2>
                    {headline}
                </h2>
            </div>
            <p>
                {description}
            </p>
        </div>
    )
}

export default Hero;