import { URL } from "../App";
import { Dispatch } from "../interfaces";

export const fetchDataAction = async (dispatch: Dispatch) =>  {
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
        type: "SET_EPISODES",
        payload: dataJSON._embedded.episodes
    })
}
