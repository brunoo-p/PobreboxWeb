import { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

export default function UserProvider({children}){
    const [ user, setUser ] = useState(null);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserForm() {
    const context = useContext(UserContext);
    const { user, setUser } = context;
    return { user, setUser };
}