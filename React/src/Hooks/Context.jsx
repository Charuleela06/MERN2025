import { createContext } from "react";

export const Context= createContext();

export const UserContext = ({children}) => {
    const user = {name: "Charu", phone :"9876459705"}
    return (
        <Context.Provider value={user}>
            {children}
        </Context.Provider>
    )
}

export default Context;