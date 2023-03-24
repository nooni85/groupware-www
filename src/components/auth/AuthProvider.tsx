import {createContext, PropsWithChildren, useContext, useState} from 'react';
import {User} from "../../model/user";

export type AuthContextType = {
    user?: User;
    login?: (user: User) => void;
    logout?: () => void;
}

const AuthContext = createContext<AuthContextType>({});

export default function AuthProvider({children}: PropsWithChildren): JSX.Element {
    const [user, setUser] = useState<User | undefined>(undefined);

    const login = (user: User) => {
        setUser(user);
    };

    const logout = () => {
        setUser(undefined);
    };
    

    return (
        <AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}