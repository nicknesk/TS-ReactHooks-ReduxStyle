import { URL } from "../App";
import { IEpisode, IState, IDispatch } from '../interfaces';

export const fetchDataAction = async (dispatch: IDispatch) =>  {
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
        type: "FETCH_DATA",
        payload: dataJSON._embedded.episodes
    })
}

export const toggleFavAction = ( store: {state: IState, dispatch: IDispatch}, 
                                 episode: IEpisode): IState => {

    const { state, dispatch } = store;
    const isEpisodeInFav = state.favourites.includes(episode);
    return dispatch({
        type: isEpisodeInFav ? "REMOVE_FAV" : "ADD_FAV",
        payload: episode
    })
}

