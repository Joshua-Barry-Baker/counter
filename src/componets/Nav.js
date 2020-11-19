import React from 'react'

export default function Nav() {
    return (
        <nav>
            <details>
                <summary>H1</summary>
                <details>
                    <summary>H2</summary>
                    <p>This is a test to see if I could make a dropdown with the details and summary tags</p>
                    <details>
                        <summary>H3</summary>
                        <summary><a href="https://www.google.com" target="_blank">A link to google.com</a></summary>
                    </details>
                </details>
            </details>
        </nav>
    )
}
