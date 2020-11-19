import React, { useState, useEffect } from 'react';

function CounterSub() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });
return (
    <article>
        <h1>The Counter</h1>
        <div id="counter">
            <button id="counterSub" onClick={() => setCount(count + 1)}>
                -
            </button>
            <div id="counterDisplay">{count}</div>
            <button id="counterAdd" onClick={() => setCount(count - 1)}>
                +
            </button>
            <button id="counterReset">Reset to 0</button>
        </div>
    </article>
    )
}