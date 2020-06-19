import React from 'react';
import { Router, RouteComponentProps } from '@reach/router';

import Layout from './Layout';
import HomePage from './pages/home/HomePage';
import FavPage from './pages/FavPage';
import NotFound from './pages/NotFound';
import { StoreProvider } from './store/Store';

export const URL = "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";

const RouterPage = ( 
    props: { 
        component: JSX.Element, 
        layout: JSX.Element 
    }  
    & RouteComponentProps 
) => <React.Fragment>{props.layout}{props.component}</React.Fragment>;

function App(): JSX.Element {
    return (
        <StoreProvider>
            <Router>
                <RouterPage 
                    component = {<HomePage/>} 
                    layout = {<Layout/>} 
                    path = "/"
                />
                <RouterPage
                    component = {<FavPage/>} 
                    layout = {<Layout/>} 
                    path = "/faves"
                />
                <RouterPage 
                    component = {<NotFound/>} 
                    layout = {<Layout/>} 
                    default
                /> 
            </Router>
        </StoreProvider>
    );
}

export default App;
