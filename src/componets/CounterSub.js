import React, { useState, useEffect } from 'react';

export default(
function CounterSub() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Current count: ${count}`;
    });
return (
    <article>
        <h1>The Counter</h1>
            <p id="count">{count}</p>
            <button id="counterSub" onClick={() => setCount(count - 1)}>
                -
            </button>
            <button id="counterAdd" onClick={() => setCount(count + 1)}>
                +
            </button>
            <br />
            <button id="counterReset" onClick={() => setCount(count - count)}>Reset to 0</button>
    </article>
    )
})