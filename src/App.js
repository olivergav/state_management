import './App.css';
import {useReducer} from "react";
import { v4 as id } from 'uuid';

import initialState from "./initialState";
import Grudges from "./components/Grudges/Grudges";
import NewGrudge from "./components/Grudges/NewGrudge";
import {reducer} from "./components/reducer";
// import Counter from "./components/Counter/Counter";
// import CounterFn from "./components/CounterFn/CounterFn";
import {GRUDGE_ADD} from "./actionTypes"

function App() {
    const [grudges, dispatch] = useReducer(reducer, initialState);


    const addGrudge = ({person, reason}) => {
        // grudge.id = id()
        // grudge.forgiven = false;

        dispatch({
            type: GRUDGE_ADD,
            payload: {
                person,
                reason,
            },
            // meta
            // error
        })


        setGrudges([grudge, ...grudges])
    }

    const toggleForgiveness = (id) => {
        setGrudges(
            grudges.map((grudge) => {
                if (grudge.id !== id) return grudge
                return {...grudge, forgiven: !grudge.forgiven}
            })
        )
    }

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
