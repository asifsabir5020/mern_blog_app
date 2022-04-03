export const setAuthInfoAtLocal = info => {
    localStorage.setItem("user", JSON.stringify(info.user));
    localStorage.setItem("token", info.token);
}

export const getAuthTokenFromLocal = info => {
    return localStorage.getItem("token");
}

export const isAuthenticatedUser = info => {
    return !!getAuthTokenFromLocal();
}

export const isAdminUser = info => {
    return !!getAuthTokenFromLocal();
}

export const removeAuthInfoFromLocal = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
}