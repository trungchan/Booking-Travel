
import { getListDeparture } from "../../api/DeparturesAPI";
import * as TYPES from "../contant/ActionType";
const actionFetchListDeparturesAPI = () => {
    return (dispatch) => {
        return getListDeparture().then((res) => {
            dispatch(actionFetchListDeparturesRedux(res));
        });
    };
};
const actionFetchListDeparturesRedux = (listDeparture) => {
    return {
        type: TYPES.FETCH_DEPARTURES_LIST,
        payload: listDeparture,
    };
};
export { actionFetchListDeparturesAPI, actionFetchListDeparturesRedux }
