import { FC,ReactNode, useMemo} from "react";
import { createContext,useContext, useState ,useReducer} from "react";


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

type Action = { type:"OPEN_SIDEBAR" | "CLOSE_SIDEBAR"};


function uiReducer(state:StateValues,action:Action){
    switch(action.type){
        case "OPEN_SIDEBAR":{
            return {
                ...state,
                isSideBarOpen: true
            }
        }
        case "CLOSE_SIDEBAR":{
            return {
                ...state,
                isSideBarOpen:false
            }
        }
    }
}
interface Props{
    children:ReactNode
}


export const UIProvider:FC<Props>= ({children})=>{

    const [state,dispatch] = useReducer(uiReducer,initialState);

    const openSideBar = ()=>dispatch({type: "OPEN_SIDEBAR"});
    const closeSideBar = ()=>dispatch({type:"CLOSE_SIDEBAR"});

    const value = useMemo(()=>{
        return{
        ...state,
        openSideBar,
        closeSideBar
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[state.isSideBarOpen])
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