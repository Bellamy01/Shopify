import { FC,ReactNode, useContext } from "react";
import { createContext } from "vm";

interface Props {
    children:ReactNode[]
}
const UIContext =  createContext({
    uiState:"defaultState"
})


export const UIProvider:FC<Props> = ({children})=>{
    return(
        <UIContext.Provider value={{uiState:"someState"}}>
            {children}
        </UIContext.Provider>
    )
}

export const useUI = ()=>{
    const context = useContext(UIContext);
    return context;
}