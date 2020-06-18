import React, { createContext, useReducer } from 'react';
import { IState, IAction } from './interfaces';

const initialState:IState = {
    episodes: [],
    favourites: []
}

function reducer(state:IState, action:IAction):IState {
    const { type, payload } = action;
    switch (type) {
        case "FETCH_DATA": {
            return {...state, episodes: payload}
        }
        case "ADD_FAV": {
            return {...state, favourites: [...state.favourites, payload]}
        }
        case "REMOVE_FAV": {
            const newFavorits = state.favourites.filter( favourite => favourite.id !== payload.id )
            return {...state, favourites: newFavorits}
        }
           
        default:
            return state
    }
}


export const Store = createContext<IState | any>(initialState);

export function StoreProvider(props:any) {
    const { children, ...other} = props;
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Store.Provider value = { {state, dispatch} } {...other}>
            { children }
        </Store.Provider>
    );
}

export default Store;