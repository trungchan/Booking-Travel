
import * as TYPES from "../contant/ActionType";

export const showFormAction = () => {
    return {
        type: TYPES.SHOW_FORM,
    };
};
export const closeFormAction = () => {
    return {
        type: TYPES.CLOSE_FORM,
    };
};

