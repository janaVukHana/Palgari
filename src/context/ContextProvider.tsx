import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

// createContext function accept DEFAULT VALUE. Default value is important for autocomplete purpose.
const StateContext = createContext<{
    active: string | null,
    setActive: Dispatch<SetStateAction<string | null>>,
    showMenu: boolean | null,
    setShowMenu: Dispatch<SetStateAction<boolean | null>>,
    isHomePageActive: boolean | null,
    setIsHomePageActive: Dispatch<SetStateAction<boolean | null>> 
}>({
    active: null,
    setActive: () => {},
    showMenu: null,
    setShowMenu: () => {},
    isHomePageActive: null,
    setIsHomePageActive: () => {},
})

// Now create context provider
export const ContextProvider = ({ children }: { children: ReactNode }) => {

    const [active, setActive] = useState<string | null>('home')
    const [showMenu, setShowMenu] = useState<boolean | null>(() => {
        if(window.innerWidth > 768) {
            return true
        }
        return false
    })
    const [isHomePageActive, setIsHomePageActive] = useState<boolean | null>(true)

    return (
        <StateContext.Provider value={{
            active,
            setActive,
            showMenu,
            setShowMenu,
            isHomePageActive,
            setIsHomePageActive,
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
