import * as TYPES from "../contant/ActionType";

var initialState =
{
    // tour: [],
    // totalElements: 0
    search: '',
    minPrice: '',
    maxPrice: '',
    minDiscount: '',
    maxDiscount: '',
    minRatting: '',
    maxRatting: '',
    findTour: '',
    searchDestination: '',
    tourDetail: {}
}
// Khi đã khai báo là object nhứo fai return ra object và ...state




const TourReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.FETCH_TOURS_LIST:
            // console.log("payload tours: ", action.payload);
            return {
                ...state,
                // tour: [...action.payload.content],
                // totalElements: action.payload.totalElements
                ...action.payload
            }
        case TYPES.DELETE_TOUR:
            // console.log("delete:::", action.payload);
            const idDelete = action.payload;
            // filter trên mảng này luôn
            state.content = state.content.filter((account) => account.id !== idDelete);
            return { ...state };
        case TYPES.SEARCH_TOUR:
            // console.log("delete:::", action.payload);
            state.search = action.payload
            return { ...state };
        case TYPES.MAX_PRICE:
            // console.log("delete:::", action.payload);
            state.maxPrice = action.payload
            return { ...state };
        case TYPES.MIN_PRICE:
            // console.log("delete:::", action.payload);
            state.minPrice = action.payload
            return { ...state };
        case TYPES.MAX_DISCOUNT:
            // console.log("delete:::", action.payload);
            state.maxDiscount = action.payload
            return { ...state };
        case TYPES.MIN_DISCOUNT:
            // console.log("delete:::", action.payload);
            state.minDiscount = action.payload
            return { ...state };
        case TYPES.MIN_RATTING:
            // console.log("delete:::", action.payload);
            state.minRatting = action.payload
            return { ...state };
        case TYPES.MAX_RATTING:
            // console.log("delete:::", action.payload);
            state.maxRatting = action.payload
            return { ...state };
        case TYPES.FIND_TOUR:
            // console.log("delete:::", action.payload);
            state.findTour = action.payload
            return { ...state };
        case TYPES.SEARCH_DES:
            // console.log("delete:::", action.payload);
            state.searchDestination = action.payload
            return { ...state };
        case TYPES.GET_TOUR_ID:
            // console.log("action.payload");
            state.tourDetail = action.payload
            return {
                ...state
            };
        case TYPES.CLEAR_SEARCH:
            return {
                ...state,
                search: ''
            }

        default:
            return state;
    }
};
export default TourReducer;