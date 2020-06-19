import React, { useContext } from 'react';
import { IEpisode } from './interfaces';

import { 
    Grid, makeStyles, Card, 
    CardMedia, CardContent, 
    Typography, CardActions, IconButton } from '@material-ui/core';
import FavoriteIcon from "@material-ui/icons/Favorite";  

import Store from './store/Store';
import { toggleFavAction } from './store/Actions';

const useStyles = makeStyles({
    root: {
      width: 320,
    },
    media: {
      height: 180,
    },
    content: {
      height: 60,
    },
    action: {
      height: 0,
      marginBottom: 0,
    },
    button: {
      position: "relative",
      top: -19,
      left: 260
    }
  });

function EpisodesList(...props: any ): JSX.Element[] {
    const { state, dispatch } = useContext(Store);
    const { episodes, favourites } = state;
    const classes = useStyles();
    
    return ( 
        episodes.map( (episode:IEpisode): JSX.Element => {
            const color = favourites.includes(episode) ? "secondary" : "default";
            return (
                <Grid item key = { episode.id } { ...props }>
                    <Card className={ classes.root }>
                        <CardMedia
                            className={ classes.media }
                            image = { episode.image.medium }
                            title = { episode.name }
                        />
                        <CardContent className = {classes.content}>
                            <Typography variant = "h6" component = "h2">
                                { episode.name }
                            </Typography>
                            <Typography variant="body2" color="textSecondary" >
                                Season: { episode.season } Number: { episode.number }
                            </Typography>
                        </CardContent>
                        <CardActions className = {classes.action}>
                            <IconButton 
                              aria-label="add to favorites" 
                              className = {classes.button} 
                              color = { color }
                              onClick = { () => toggleFavAction( {state, dispatch}, episode) }
                            >
                                <FavoriteIcon/>
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
        )})
  );
}

export default EpisodesList;