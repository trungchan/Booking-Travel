import { Api } from "./Api"

const getListDestination = () => {
    return Api("GET", "Destinations/", null);
}
export { getListDestination };