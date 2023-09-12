import * as TYPES from "../contant/ActionType";

var initialState = []
const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.FETCH_USER_LIST:
            //   console.log("payload department: ", action.payload);
            // muốn thay đổi trang thái, pải cập nhập lại state nhé
            return [...action.payload];

        case TYPES.FETCH_USER_REQUEST:
            return [...action.payload];
        default:
            return state;

    }
};


export default UserReducer;