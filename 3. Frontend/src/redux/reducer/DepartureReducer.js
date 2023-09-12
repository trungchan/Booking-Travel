import * as TYPES from "../contant/ActionType";

var initialState = [];
const DepartureReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.FETCH_DEPARTURES_LIST:
            //   console.log("payload department: ", action.payload);
            return [...action.payload];
        default:
            return state;

    }
};
export default DepartureReducer;