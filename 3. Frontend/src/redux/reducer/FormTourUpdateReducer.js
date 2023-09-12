import * as TYPES from "../contant/ActionType";

const initialState = {
    isShowForm: false,
    tourUpdateInfo: {}
};

const FormTourUpdateReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.SHOW_FORM_UPDATE:
            // console.log(state)
            return {
                ...state,
                isShowForm: !state.isShowForm
            };
        case TYPES.FETCH_TOUR_UPDATE_INFO:
            console.log("tourUD::", action.payload);
            return {
                ...state,
                tourUpdateInfo: action.payload
            };
        default:
            return { ...state };
    }
};

export default FormTourUpdateReducer;