import * as TYPES from "../contant/ActionType";

const initialState = {
    isShowForm: false,
    bookingUpdateInfo: {},

};

const FormBookingUDReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.SHOW_FORM_BOOKING_UD:
            // console.log("ud", !state.isShowForm)
            return {
                ...state,
                isShowForm: true
            };
            case TYPES.CLOSE_FORM_BOOKING_UD:
                return {
                    ...state,
                    isShowForm: false
                };



        case TYPES.FETCH_BOOKING_UPDATE_INFO:
            // console.log("tourUD::", action.payload);
            return {
                ...state,
                bookingUpdateInfo: action.payload
            };

        default:
            return { ...state };
    }
};

export default FormBookingUDReducer;