import { FC,ReactNode} from "react";
import { createContext,useContext, useState } from "react";


export interface StateModifiers{
    openSideBar: ()=>void,
    closeSideBar: ()=>void
}

export interface StateValues{
    isSideBarOpen: boolean
}

const stateModifiers = {
    openSideBar: ()=>{},
    closeSideBar: ()=>{}
}

const initialState = {isSideBarOpen: false}

type State = StateValues & StateModifiers
const UIContext =  createContext<State>({
    ...stateModifiers,
    ...initialState
})
interface Props{
    children:ReactNode
}


export const UIProvider:FC<Props>= ({children})=>{

    const openSideBar = ()=>alert("Opening SideBar");
    const closeSideBar = ()=>alert("Closing SideBar");

    const [isSideBarOpen,setSideBarOpen] = useState(false);
    const uiState = {
        isSideBarOpen,
        setSideBarOpen,
        isSideBarOpen: false
    }
    return(
        <UIContext.Provider value={uiState}>
            {children}
        </UIContext.Provider>
    )
}

export const useUI = ()=>{
    const context = useContext(UIContext);
    return context;
}