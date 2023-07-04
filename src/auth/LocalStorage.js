export const setLocalAuthData = (authData) => {
    localStorage.setItem("authData", JSON.stringify(authData))
}

export const removeLocalAuthData = () => {
    localStorage.removeItem("authData")
}

export const getLocalAuthData = () => {
    return JSON.parse(localStorage.getItem("authData"))
}