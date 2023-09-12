import { createUserAPI, getListUser, loginRequest } from "../../api/UserAPI";
import * as TYPES from "../contant/ActionType";
const actionFetchListUserAPI = () => {
    return (dispatch) => {
        return getListUser().then((res) => {
            console.log("resuser.", res);
            dispatch(actionFetchListUserRedux(res));
        });
    };
};
const actionFetchListUserRedux = (listUser) => {
    console.log("List11", listUser);
    return {
        type: TYPES.FETCH_USER_LIST,
        payload: listUser,

    };
};


const actionCheckUserAPI = (authLogin) => {
    return (dispatch) => {
        return loginRequest(authLogin).then((response) => {
            dispatch(actionCheckUserRedux(response));
        });
    };
};


const actionCheckUserRedux = (authLogin) => {
    // console.log('123456', authLogin)
    return {
        type: TYPES.FETCH_USER_REQUEST,
        payload: authLogin,
    };
};


const actionCreateUserAPI = (useNew) => {
    return (dispatch) => {
        return createUserAPI(useNew).then((res) => {
            dispatch(actionFetchListUserAPI());
        })
    }
}



export { actionFetchListUserAPI, actionFetchListUserRedux, actionCheckUserAPI, actionCheckUserRedux, actionCreateUserAPI }

// Xác thực password


