import {
    createContext,
    useContext,
    useState,
    type ReactNode,
} from "react";

interface UIContextType {
    isMenuOpen: boolean;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

interface UIProviderProps {
    children: ReactNode;
}

interface UIContextType {
    isMenuOpen: boolean;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function UIProvider({ children }: UIProviderProps) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <UIContext.Provider
            value={{
                isMenuOpen,
                setIsMenuOpen,
                isModalOpen,
                setIsModalOpen,
            }}
        >
            {children}
        </UIContext.Provider>
    );
}

export function useUI() {

    const context = useContext(UIContext);

    if (!context) {
        throw new Error("useUI must be used inside UIProvider");
    }

    return context;
}