import {FC} from "react";
import { Container } from "@components/common/ui";

const NavBar = ()=>{
    return(
        <Container>
            <div className="flex flex-row md:py-6">
                <h1 className="uppercase">bel store</h1>
            </div>
        </Container>
    )
}

export default NavBar;