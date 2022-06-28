import React from 'react';

const Grudge = React.memo(({grudge: {id, person, reason, forgiven}, onForgive}) => {
    const forgive = () => onForgive(id)

    console.log('grudge', id)

    return (
        <div>
            <h3>{person}</h3>
            <p>{reason}</p>
            <label htmlFor="forgiven">Forgiven</label>
            <input type="checkbox" id="forgiven" checked={forgiven} onChange={forgive}/>
        </div>
    );
})

export default Grudge;