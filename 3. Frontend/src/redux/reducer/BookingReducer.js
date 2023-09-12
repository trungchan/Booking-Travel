import * as TYPES from "../contant/ActionType";

var initialState =
{
    search: ""
}
// Khi đã khai báo là object nhứo fai return ra object và ...state




const BookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.FETCH_BOOKING_LIST:
            // console.log("payload tours: ", action.payload);
            return {
                ...state,
                // tour: [...action.payload.content],
                // totalElements: action.payload.totalElements
                ...action.payload
            }
        case TYPES.DELETE_BOOKING:
            // console.log("delete:::", action.payload);
            const idDelete = action.payload;
            // filter trên mảng này luôn
            state.content = state.content.filter((booking) => booking.id !== idDelete);
            return { ...state };
        case TYPES.SEARCH_TOUR:
            // console.log("delete:::", action.payload);
            state.search = action.payload
            return { ...state };
        default:
            return state;
    }
};
export default BookingReducer;