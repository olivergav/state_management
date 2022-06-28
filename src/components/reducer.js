import { v4 as id } from 'uuid';
import {GRUDGE_ADD} from "./Grudges/actionTypes"

export const reducer = (state = [], action) => {
    if (action.type === GRUDGE_ADD){
        return [
            {
                id: id(),
                forgiven:  false,
                ...action.payload
            },
            ...state
        ]
    }
}