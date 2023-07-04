import { AuthContext } from "./AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw Error("Attempt to access auth context outside provider")
    }

    return context;
}