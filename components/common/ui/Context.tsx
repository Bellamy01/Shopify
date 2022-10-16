import { FC } from "react";
import { createContext } from "vm";

const UIContext =  createContext

export const UIProvider = ({children})=>