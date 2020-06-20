import { URL } from "../App";
import { IDispatch } from "../interfaces";

export const fetchDataAction = async (dispatch: IDispatch) =>  {
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
        type: "SET_EPISODES",
        payload: dataJSON._embedded.episodes
    })
}
