import './App.css';

import Grudges from "./components/Grudges/Grudges";
import NewGrudge from "./components/Grudges/NewGrudge";
import {GrudgeProvider} from "./GrudgeContext";

function App() {

    return (
        <GrudgeProvider>
            {/*<div className="app">*/}
                {/*<Counter max={10}/>*/}
                {/*<CounterFn max={10}/>*/}
                <NewGrudge/>
                <Grudges/>
            {/*</div>*/}
        </GrudgeProvider>
    );
}

export default App;
