
import { addToursNewAPI, deleteTourAPI, getListToursAPI, getTourByID_API, updateTourAPI } from "../../api/ToursAPI";
import * as TYPES from "../contant/ActionType";
const actionFetchTourAPI = (search, size, sort, page, minRatting, maxRatting, minDiscount, maxDiscount, maxPrice, minPrice, findTour, searchDestination) => {
    return (dispatch) => {
        return getListToursAPI(search, size, sort, page, minRatting, maxRatting, minDiscount, maxDiscount, maxPrice, minPrice, findTour, searchDestination)
            .then((res) => {
                dispatch(actionFetchTourRedux(res));
                // console.log("res", res);
            });
    };
};
const actionFetchTourRedux = (listTours) => {
    return {
        type: TYPES.FETCH_TOURS_LIST,
        payload: listTours,
    };
};

const actionAddTourAPI = (tourNew) => {
    return (dispatch) => {
        return addToursNewAPI(tourNew).then((response) => {
            // Load lại list tour, vì trả về 1 thông báo nên không cần lưu vào redux
            dispatch(actionFetchTourAPI());
        });
    };
};

const actionDeleteTourAPI = (id) => {
    return (dispatch) => {
        return deleteTourAPI(id).then((res) => {
            dispatch(actionFetchTourAPI());
        });
        ;
    }
};
const actionDeleteTourReDux = (idDelete) => {
    return {
        type: TYPES.DELETE_TOUR,
        payload: idDelete
    };
};

const actionUpdateTourAPI = (tourUD) => {
    return (dispatch) => {
        return updateTourAPI(tourUD).then((res) => {
            dispatch(actionFetchTourAPI());
        });

    }
};


const actionSearchTourReDux = (search) => {
    return {
        type: TYPES.SEARCH_TOUR,
        payload: search
    };
};

const actionMinPriceTourReDux = (minPrice) => {
    return {
        type: TYPES.MIN_PRICE,
        payload: minPrice
    };
};
const actionMaxPriceTourReDux = (maxPrice) => {
    return {
        type: TYPES.MAX_PRICE,
        payload: maxPrice
    };
};
const actionMinDisTourReDux = (minDiscount) => {
    return {
        type: TYPES.MIN_DISCOUNT,
        payload: minDiscount
    };
};
const actionMaxDisTourReDux = (maxDiscount) => {
    return {
        type: TYPES.MAX_DISCOUNT,
        payload: maxDiscount
    };
};
const actionMinRattTourReDux = (minRatting) => {
    return {
        type: TYPES.MIN_RATTING,
        payload: minRatting
    };
};
const actionMaxRattTourReDux = (maxRatting) => {
    return {
        type: TYPES.MAX_RATTING,
        payload: maxRatting
    };
};

const actionFindTourReDux = (findTour) => {
    return {
        type: TYPES.FIND_TOUR,
        payload: findTour
    };
};

const actionSearchDestinationReDux = (searchDes) => {
    return {
        type: TYPES.SEARCH_DES,
        payload: searchDes
    };
};




const actionGetTourDetailAPI = (id) => {
    return (dispatch) => {
        return getTourByID_API(id).then((response) => {
            // Load lại list tour, vì trả về 1 thông báo nên không cần lưu vào redux
            dispatch(actionGetTourRedux(response));
        });
    };
};

const actionGetTourRedux = (tourDetail) => {
    return {
        type: TYPES.GET_TOUR_ID,
        payload: tourDetail
    }
};
export const clearSearch = () => {
    return {
        type: TYPES.CLEAR_SEARCH
    };
};


export {
    actionFetchTourAPI, actionFetchTourRedux, actionAddTourAPI, actionDeleteTourAPI,
    actionDeleteTourReDux, actionUpdateTourAPI, actionSearchTourReDux, actionGetTourRedux,
    actionGetTourDetailAPI, actionMinPriceTourReDux, actionMaxDisTourReDux, actionMaxPriceTourReDux,
    actionMaxRattTourReDux, actionMinDisTourReDux, actionMinRattTourReDux, actionFindTourReDux, actionSearchDestinationReDux
}


