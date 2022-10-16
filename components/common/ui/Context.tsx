import { FC,ReactNode} from "react";
import { createContext,useContext, useState } from "react";


const UIContext =  createContext<{[key:string]:any}>({
    uiState:"defaultState"
})
interface Props{
    children:ReactNode
}


export const UIProvider:FC<Props>= ({children})=>{
    const [isSideBarOpen,setSideBarOpen] = useState(false);
    const uiState = {
        isSideBarOpen,
        setSideBarOpen
    }
    {
        uiState:{
            isSideBarOpen;
        }
    }
    return(
        <UIContext.Provider value={{uiState}}>
            {children}
        </UIContext.Provider>
    )
}

export const useUI = ()=>{
    const context = useContext(UIContext);
    return context;
}