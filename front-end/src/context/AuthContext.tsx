import {createContext} from "react";

type AuthContextType = {
    isAuthenticated : boolean;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) 
{
    const isAuthenticated = false;

    async function signIn() 
    {
        fetch('https://localhost:7284/api/Autenticacao',)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}