import { useState } from "react"

const countrey = () => {

    const [state, setState] = useState(100)

    return (
        <>
            <section className="home">
                <div className="card">
                    <h2>
                        first counter
                    </h2>
                    <h1>
                        {state}
                    </h1>
                    <div className="buttons">
                        <button onClick={() => setState(state-1)}>decrease</button>
                        <button onClick={() => setState(0)}>reset</button>
                        <button onClick={() => setState(state+1)}>increase</button>
                    </div>
                </div> 
            </section>
        </>
    )
}

export default countrey
