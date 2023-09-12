import { Api } from "./Api"

const getListUser = () => {
    return Api("GET", "user", null);
}

// const loginRequest = (loginRequest) => {
//     return instance.post("auth/login", loginRequest)
// }
const loginRequest = (loginRequest) => {
    return Api("POST", "auth/login", loginRequest)
}

// Tạo mới user:
const createUserAPI = (newUser) => {
    return Api("POST", "Registers", newUser)
}
export { getListUser, loginRequest, createUserAPI };


