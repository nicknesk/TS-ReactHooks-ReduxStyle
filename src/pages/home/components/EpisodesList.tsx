import React, { useContext } from 'react';
import { IEpisode } from '../../../interfaces';

import { 
    Grid, makeStyles, Card, 
    CardMedia, CardContent, 
    Typography, CardActions, IconButton, CardActionArea 
} from '@material-ui/core';
import FavoriteIcon from "@material-ui/icons/Favorite";  

import Store from '../../../store/Store';

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

function EpisodesList( props: {episodes: IEpisode[], favourites: IEpisode[]} ): JSX.Element[] {
    const { state, dispatch } = useContext(Store);
    const { episodes, favourites } = state;
    const classes = useStyles();
    
    return ( 
        episodes.map( (episode:IEpisode): JSX.Element => {
            const color = favourites.includes(episode) ? "secondary" : "default";
            return (
                <Grid item key = { episode.id } { ...props }>
                    <Card className={ classes.root }>
                         <CardActionArea>
                            <CardMedia
                                className={ classes.media }
                                image = { episode.image.medium }
                                title = { episode.name }
                            />
                        </CardActionArea>
                       
                        <CardContent className = {classes.content}>
                            <CardActionArea>
                                <Typography variant = "h6" component = "h2">
                                    { episode.name }
                                </Typography>
                            </CardActionArea>
                            <Typography variant="body2" color="textSecondary" >
                                Season: { episode.season } Number: { episode.number }
                            </Typography>
                        </CardContent>
                       
                        <CardActions className = {classes.action}>
                            <IconButton 
                              aria-label="add to favorites" 
                              className = {classes.button} 
                              color = { color }
                              onClick = { () => dispatch({
                                    type: "TOGGLE_FAV",
                                    payload: episode  
                                  })
                                }
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