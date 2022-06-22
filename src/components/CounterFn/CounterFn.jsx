import React, {useEffect, useState} from 'react';

function CounterFn({max}) {
    const [count, setCount] = useState(getStateFromLocalStorage().count)

    useEffect(() => {
        localStorage.setItem('counterState', JSON.stringify({count}))
    }, [count])

    function increment() {
        setCount(state => Math.min(state + 1, max))
    }

    function decrement() {
        setCount(count - 1)
    }

    function reset() {
        setCount(0)
    }

    return (
        <main>
            <p>{count}</p>
            <section>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </section>
        </main>
    );
}

export default CounterFn;