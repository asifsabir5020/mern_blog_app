import { removeAuthInfoFromLocal } from "./auth";

export const handleThrowError = e => {
    const error = e.toJSON();
    if(error.status === 401){
        removeAuthInfoFromLocal();
        window.reload = 'auth/login'
    }
    console.log(error);
} 