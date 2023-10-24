import { ReactElement, createContext, useContext, useState, ReactNode } from "react";


const UserContext = createContext<Boolean>(false)
const DisatchContext = createContext<Function>(() => { })
interface AuthProviderProps {
    children: ReactNode;
}

function ContextProvider({ children }: AuthProviderProps): ReactElement {
    const [isAuthenticated, setIsAuthenticated] = useState<Boolean>(false)
    return (
        <UserContext.Provider value={isAuthenticated} >
            <DisatchContext.Provider value={setIsAuthenticated}>
                {children}
            </DisatchContext.Provider>
        </UserContext.Provider>
    )
}
export function UseUserState() {
    const isAuthenticated: Boolean = useContext(UserContext)
    return isAuthenticated
}

export function UseUserDispatch() {
    const dispatch: Function = useContext(DisatchContext)
    return dispatch
}
export default ContextProvider