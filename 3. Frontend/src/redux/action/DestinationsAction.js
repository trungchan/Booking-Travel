
import { getListDestination } from "../../api/DestinationsAPI";
import * as TYPES from "../contant/ActionType";
const actionFetchListDestinationsAPI = () => {
    return (dispatch) => {
        return getListDestination().then((res) => {
            dispatch(actionFetchListDestinationsRedux(res));
        });
    };
};
const actionFetchListDestinationsRedux = (listDestination) => {
    return {
        type: TYPES.FETCH_DESTINATIONS_LIST,
        payload: listDestination,
    };
};
export { actionFetchListDestinationsAPI, actionFetchListDestinationsRedux }
