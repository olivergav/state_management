import {createContext} from "react";
import {useCallback, useReducer} from "@types/react";
import {reducer} from "./reducer";
import initialState from "./initialState";
import {GRUDGE_ADD, GRUDGE_FORGIVE} from "./actionTypes";

export const GrudgeContext = createContext();

export const GrudgeProvider = ({children}) => {
    const [grudges, dispatch] = useReducer(reducer, initialState);

    const addGrudge = useCallback(({person, reason}) => {
        dispatch({
            type: GRUDGE_ADD,
            payload: {
                person,
                reason,
            },
            // meta
            // error
        })
    }, [dispatch])

    const toggleForgiveness = useCallback((id) => {
        dispatch({
            type: GRUDGE_FORGIVE,
            payload: {
                id
            }
        })
    }, [])

    return (
        <GrudgeContext.Provider value={{grudges, addGrudge, toggleForgiveness}}>
            {children}
        </GrudgeContext.Provider>
    )
}

