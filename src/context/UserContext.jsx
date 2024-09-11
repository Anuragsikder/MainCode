import { Children, createContext, useState } from "react";

export const UserContext=createContext({})

export function UserContextProvider({Children}){
    const [user,setUser]=useState(null)

    return (<UserContext.Provider value={{user,setUser}}>
      {Children}


    
    </UserContext.Provider>)
}