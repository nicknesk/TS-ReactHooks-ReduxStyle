import React, { createContext, useReducer } from 'react';
import { IState, IAction } from '../interfaces';

const initialState: IState = {
    episodes: [],
    favourites: []
}

function reducer(state:IState, action:IAction):IState {
    const { type, payload } = action;
    switch (type) {
        case "SET_EPISODES": {
            return {...state, episodes: action.payload}
        }
        case "TOGGLE_FAV": {
            const isEpisodeInFav = state.favourites.includes(payload);
            const newFavorits = isEpisodeInFav
                ? state.favourites.filter( favourite => favourite.id !== payload.id )
                : [...state.favourites, payload]
            return {...state, favourites: newFavorits}
        }
        default:
            return state
    }
}


export const Store = createContext<IState | any>(initialState);

export function StoreProvider( { children, ...other}: { children: JSX.Element } ) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Store.Provider value = { {state, dispatch} } {...other}>
            { children }
        </Store.Provider>
    );
}

export default Store;