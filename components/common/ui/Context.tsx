import { FC,ReactNode} from "react";
import { createContext,useContext } from "react";


const UIContext =  createContext({
    uiState:"defaultState"
})
interface Props{
    children:ReactNode
}


export const UIProvider:FC<Props>= ({children})=>{
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