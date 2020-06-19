import React, { Suspense, useContext, lazy } from 'react';
import { Grid } from '@material-ui/core';
import Store from '../store/Store';

const EpisodesList = lazy<any>( () => import("../pages/home/components/EpisodesList"));


function FavPage(): JSX.Element {
    const { state } = useContext(Store)

    const episodeProps = {
        episodes: state.favourites,
    };
    return (
        <Grid container justify = "space-around" spacing = {1}>
            <Suspense fallback = { <div>loading...</div> }>
                { episodeProps.episodes && <EpisodesList { ...episodeProps } /> }
            </Suspense>
        </Grid>
    );
}

export default FavPage;