import * as TYPES from "../contant/ActionType";

const initialState = {
    isShowFormCreate: false,
};

const FormBookingCreateReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.SHOW_FORM_BOOKING_CREATE:
            // console.log(state)
            return {
                ...state,
                isShowFormCreate: true
            };
        case TYPES.CLOSE_FORM_BOOKING_CREATE:
            // console.log(state)
            return {
                ...state,
                isShowFormCreate: false
            };
        default:
            return { ...state };
    }
};

export default FormBookingCreateReducer;