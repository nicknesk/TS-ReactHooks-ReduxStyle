import React, { Suspense, useContext, lazy, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import Store from '../../store/Store';
import { fetchDataAction } from '../../store/Actions';

const EpisodesList = lazy<any>( () => import("../elements/EpisodesList"));

function HomePage(props: any) {
    const { state, dispatch } = useContext(Store)
   
    useEffect( () => { state.episodes.length ===0 && fetchDataAction(dispatch) } )

    return (
        <Grid container justify = "space-around" spacing = {1} {...props} >
            <Suspense fallback = { <div>loading...</div> }>
                <EpisodesList  episodes = {state.episodes} />
            </Suspense>
        </Grid>
    );
}

export default HomePage;