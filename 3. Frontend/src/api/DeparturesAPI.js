import { Api } from "./Api"

const getListDeparture = ()=> {
    return Api("GET","departures/",null);
}
export {getListDeparture};