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

    const value = {
        openSideBar,
        closeSideBar,
        isSideBarOpen: false
    }
    return(
        <UIContext.Provider value={value}>
            {children}
        </UIContext.Provider>
    )
}

export const useUI = ()=>{
    const context = useContext(UIContext);
    return context;
}