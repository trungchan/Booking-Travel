import * as TYPES from "../contant/ActionType";

var initialState = [];
const DestinationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.FETCH_DESTINATIONS_LIST:
            // console.log("payload destinations: ", action.payload);
            return [...action.payload];
        default:
            return state;

    }
};
export default DestinationsReducer;