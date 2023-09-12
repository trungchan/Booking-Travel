import * as TYPES from "../contant/ActionType";

const initialState = false;

const FormRecuder = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.SHOW_FORM:
            return true;
        case TYPES.CLOSE_FORM:
            return false;
        default:
            return state;
    }
};

export default FormRecuder;