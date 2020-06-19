import React, { Suspense, useContext, lazy, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import Store from '../../store/Store';
import { IDispatch } from '../../interfaces';
import { URL } from "../../App";

const EpisodesList = lazy<any>( () => import("./components/EpisodesList"));

export const fetchDataAction = async (dispatch: IDispatch) =>  {
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
        type: "SET_EPISODES",
        payload: dataJSON._embedded.episodes
    })
}

function HomePage(props: any) {
    const { state, dispatch } = useContext(Store)
   
    useEffect( () => { state.episodes.length ===0 && fetchDataAction(dispatch) } )

    const episodeProps = {
        episodes: state.episodes,
        favourites: state.favourites
    };
    console.log(state)
    return (
        <Grid container justify = "space-around" spacing = {1}>
            <Suspense fallback = { <div>loading...</div> }>
                <EpisodesList { ...episodeProps } />
            </Suspense>
        </Grid>
    );
}

export default HomePage;