import React from 'react';
import { Router, RouteComponentProps } from '@reach/router';

import Layout from './Layout';
import HomePage from './HomePage';
import FavPage from './FavPage';
import NotFound from './NotFound';
import { StoreProvider } from './Store';

export const URL = "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";

const RouterPageWithLayout = ( props: { pageComponent: JSX.Element} & RouteComponentProps ) =>
    <Layout>{props.pageComponent}</Layout>;

function App(): JSX.Element {
    return (
        <StoreProvider>
            <Router>
                <RouterPageWithLayout pageComponent = {<HomePage/>} path = "/"/>
                <RouterPageWithLayout pageComponent = {<FavPage/>} path = "/faves"/>
                <RouterPageWithLayout pageComponent = {<NotFound/>} default/>
            </Router>
        </StoreProvider>
    );
}

export default App;
