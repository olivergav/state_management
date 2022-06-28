import React from 'react';
import Grudge from "./Grudge";

function Grudges({grudges = [], onForgive}) {
    return (
        <div>
            <h2>Grudges: ({grudges.length})</h2>
            {grudges.map((grudge) => (
                <Grudge key={grudge.id} grudge={grudge} onForgive={onForgive}/>
            ))}
        </div>
    );
}

export default Grudges;