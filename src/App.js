import './App.css';
import {useCallback, useReducer} from "react";
import { v4 as id } from 'uuid';

import initialState from "./initialState";
import Grudges from "./components/Grudges/Grudges";
import NewGrudge from "./components/Grudges/NewGrudge";
import {reducer} from "./reducer";
// import Counter from "./components/Counter/Counter";
// import CounterFn from "./components/CounterFn/CounterFn";
import {GRUDGE_ADD, GRUDGE_FORGIVE} from "./actionTypes"

function App() {
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

    }, [dispatch])

    return (
        <div className="App">
            {/*<Counter max={10}/>*/}
            {/*<CounterFn max={10}/>*/}
            <NewGrudge onSubmit={addGrudge}/>
            <Grudges grudges={grudges} onForgive={toggleForgiveness}/>

        </div>
    );
}

export default App;
