import React from "react"

import "./style.css"
export default function App() {
    /**
     * 1.Set up state to track our count (initial value is 0)
     */

    const[count, setCount] = React.useState(0)
    // function add(){
    //     setCount(count+1)
    // }

    // function subtract(){
    //     setCount(count-1)
    // }

    // now use the call back function in add and subtract
    // function add(){
    //     setCount(function(prevCount){
    //         return prevCount
    //     })
    // }
    //or
    function add(){
        setCount(prevCount => prevCount + 1)    //prevCount is count
    }

    function subtract(){
        setCount(prevCount => prevCount - 1)
    }

    return (
        <div className="counter">
            <button onClick={subtract} className="counter--minus">–</button>
            <div className="counter--count">
                {/* <h1>0</h1> */}
                <h1>{count}</h1>
            </div>
            <button onClick={add} className="counter--plus">+</button>
        </div>
    )
}
