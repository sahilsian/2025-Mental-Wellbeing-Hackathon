import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

export const Context = React.createContext({
    user: null,
    login: () => { },
    logout: () => { },
});

const ContextProvider = ({ children }) => {
    const navigation = useNavigation();
    const [user, setUser] = useState(null);

    return (
        <Context.Provider
            value={{
                user,
                setUser,
                navigation
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default ContextProvider