import React, { createContext, useReducer } from 'react';
import { IState, IAction } from '../interfaces';
import fetchDataAction from './Actions';


const initialState:IState = {
    episodes: [],
    favourites: []
}

function reducer(state:IState, action:IAction):IState {
    const { type, payload } = action;
    switch (type) {
      
        case "SET_EPISODES": {
            return {...state, episodes: payload}
        }
        case "TOGGLE_FAV": {
            const newFavorits = state.favourites.includes(payload) 
                ? state.favourites.filter( favourite => favourite.id !== payload.id )
                : [...state.favourites, payload]
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