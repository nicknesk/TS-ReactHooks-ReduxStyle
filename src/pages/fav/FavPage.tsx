import React, { Suspense, useContext, lazy } from 'react';
import { Grid } from '@material-ui/core';
import Store from '../../store/Store';

const EpisodesList = lazy<any>( () => import("../elements/EpisodesList"));


function FavPage(props: any): JSX.Element {
    const { state } = useContext(Store)

    return (
        <Grid container justify = "space-around" spacing = {1} {...props}>
            <Suspense fallback = { <div>loading...</div> }>
                { state.favourites && <EpisodesList episodes = {state.favourites} /> }
            </Suspense>
        </Grid>
    );
}

export default FavPage;