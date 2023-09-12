
import { addBookingNewAPI, deleteBookingAPI, getListBookingsAPI, updateBookingAPI } from "../../api/BookingAPI";

import * as TYPES from "../contant/ActionType";


const actionFetchBookingAPI = (search, size, sort, page, minBookingDate, maxBookingDate, minTotalPrice, maxTotalPrice) => {
    return (dispatch) => {
        return getListBookingsAPI(search, size, sort, page, minBookingDate, maxBookingDate, minTotalPrice, maxTotalPrice)
            .then((res) => {
                dispatch(actionFetchBookingRedux(res));
                // console.log("res", res);
            });
    };
};
const actionFetchBookingRedux = (listBooking) => {
    return {
        type: TYPES.FETCH_BOOKING_LIST,
        payload: listBooking,
    };
};

const actionAddBookingAPI = (bookingNew) => {
    return (dispatch) => {
        return addBookingNewAPI(bookingNew).then((response) => {
            // Load lại list tour, vì trả về 1 thông báo nên không cần lưu vào redux
            dispatch(actionFetchBookingAPI());
        });
    };
};

const actionDeleteBookingAPI = (idDelete) => {
    return (dispatch) => {
        return deleteBookingAPI(idDelete).then((res) => {
            dispatch(actionFetchBookingAPI());
        });
        ;
    }
};
const actionDeleteBookingReDux = (idDelete) => {
    return {
        type: TYPES.DELETE_BOOKING,
        payload: idDelete
    };
};

const actionUpdateBookingAPI = (bookingUD) => {
    return (dispatch) => {
        return updateBookingAPI(bookingUD).then((res) => {
            dispatch(actionFetchBookingAPI());
        });

    }
};


const actionSearchBookingReDux = (search) => {
    return {
        type: TYPES.SEARCH_BOOKING,
        payload: search
    };
};



export {
    actionSearchBookingReDux, actionUpdateBookingAPI, actionDeleteBookingReDux,
    actionDeleteBookingAPI, actionAddBookingAPI, actionFetchBookingAPI
}


