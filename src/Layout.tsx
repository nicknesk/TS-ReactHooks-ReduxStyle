import React, { useContext } from 'react';
import { Link } from "@reach/router";

import { 
    AppBar, createStyles, makeStyles,
    Toolbar, Typography, Theme,
} from "@material-ui/core";

import { Store } from './store/Store';

export const URL = "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
            textDecoration: "none"
        },
        body: {
            marginTop: 80
        },
        link: {
            textDecoration: "none",
            color: "inherit",
            "&:hover": {
                color: theme.palette.secondary.main
            },
        }
    }),
);

function Layout( { children, ...other }: {children: JSX.Element} & any ): JSX.Element {
    const { state } = useContext(Store)
    const classes = useStyles();

    return <>
       <div className={classes.root}>
           <AppBar position = "fixed" color = "default">
               <Toolbar>

                    <Typography variant="h4" className={classes.title} color = "textPrimary">
                        Rick and Morty
                        <Typography variant="body1" color = "textSecondary">
                           Pick you favorite episode
                        </Typography>
                    </Typography>

              
                    <Typography variant="body1" color = "textSecondary">
                         <Link to = "/" className = {classes.link}>
                            Home &nbsp; &nbsp;
                        </Link>

                        <Link to="/faves" className = {classes.link}>
                            {"Favorites: "} {state.favourites.length}
                        </Link>
                    </Typography>

                 </Toolbar>
            </AppBar>
        </div>

        <div className = {classes.body} { ...other }> 
            { children }  
        </div>
    </>;
}

export default Layout;
