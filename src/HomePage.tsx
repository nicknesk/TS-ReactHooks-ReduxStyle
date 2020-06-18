import React, { Suspense, useContext, lazy, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import Store from './Store';
import { fetchDataAction } from './Actions';


const EpisodesList = lazy<any>( () => import("./EpisodesList"));

function HomePage(props: any) {
    const {state, dispatch} = useContext(Store)
   
    useEffect( () => { state.episodes.length === 0 && fetchDataAction(dispatch) } )
    // console.log(state)

    return (
        <Grid container justify = "space-around" spacing = {1}>
            <Suspense fallback = {<div>loading...</div>}>
                <EpisodesList/>
            </Suspense>
        </Grid>
    );
}

export default HomePage;