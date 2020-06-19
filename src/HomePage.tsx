import React, { Suspense, useContext, lazy, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Store from './store/Store';
import { IDispatch } from './interfaces';
import { URL } from "./App";

const EpisodesList = lazy<any>( () => import("./EpisodesList"));

export const fetchDataAction = async (dispatch: IDispatch) =>  {
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
        type: "SET_EPISODES",
        payload: dataJSON._embedded.episodes
    })
}

function HomePage(props: any) {
    const {state, dispatch} = useContext(Store)
   
    useEffect( () => { state.episodes.length === 0 && fetchDataAction(dispatch) } )

    return (
        <Grid container justify = "space-around" spacing = {1}>
            <Suspense fallback = {<div>loading...</div>}>
                <EpisodesList/>
            </Suspense>
        </Grid>
    );
}

export default HomePage;