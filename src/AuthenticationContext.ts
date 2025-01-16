import { createContext } from "react"

interface AuthenticationStatus {
    user?: string
    fetch?: () => Promise<string>
}

export const AuthenticationContext = createContext({} as AuthenticationStatus)

