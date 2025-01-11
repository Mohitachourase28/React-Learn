/* eslint-disable no-unused-vars */
import React, {useState, useEffect, useRef} from "react"

function MyComponent(){

    /**Use state 
    let [number, setNumber] = useState(0);
    */

    /**useRef() */
    // const ref = useRef(0)

    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)


    useEffect(()=>{
        console.log("COMPONENT RENDERED");
        // console.log(inputRef);
        
    });

    function handleClick(){
        // setNumber(n => n + 1);

        // useRef()
        // ref.current++;
        // console.log(ref.current);
    }
    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "green";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "red";
        inputRef3.current.style.backgroundColor = "";
        inputRef1.current.style.backgroundColor = "";
    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "blue";
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
    }

    return(
        <div>
        <button onClick={handleClick1}>
            Click me1!
        </button>
        <input type="text" ref={inputRef1} />

        <button onClick={handleClick2}>
            Click me2!
        </button>
        <input type="text" ref={inputRef2} />

        <button onClick={handleClick3}>
            Click me3!
        </button>
        <input type="text" ref={inputRef3} />
        </div>
    );
}

export default MyComponent;