import React, { createContext, useEffect, useState } from 'react';

import { IAuthProvider, IContext, IUser } from './types';
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from './util';

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>();

    useEffect(() => {
        const user = getUserLocalStorage();

        if (user) {
            setUser(user);
        }
    }, [])

    async function authenticate(login:string, senha: string){
        const response = await LoginRequest(login, senha);
        
        const payload = {token: response.token}
        setUser(payload);
        setUserLocalStorage(payload);
    }

    function logout () {
        setUser(null);  
        setUserLocalStorage(null);
    }

    return(
        <AuthContext.Provider value={{...user, authenticate, logout}}>
            {children}
        </AuthContext.Provider>
    );
}
