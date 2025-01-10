/* eslint-disable no-unused-vars */
/**16. 03:24:17 useEffect() hook 🌟
 * useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
 *               This component re-renders
 *               This component mounts
 *               The state ofa value
 * 
 * useEffect(function, [dependencies])
 * 
 * 1. useEffect(() => {})          // Runs after every re-render
 * 2. useEffect(() => {}, [])      // Runs only on mount
 * 3. useEffect(() => {}, [value]) // Runs on mount + when value changes
 * 
 * USES
 * #1. EVENT LISTENERS
 * #2. DOM MANIPULATION
 * #3. SUBSCRIPTIONS (REAL-TIME UPDATES)
 * #4. FETCHING DATA FROM AN API
 * #5. CLEAN UP WHEN A COMPONENT UNMOUNTS

//#1
import React, {useState, useEffect} from "react"
function MyComponent(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // })
    // OR
    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // }, [])
    //OR
    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count, color])

    function addCount(){
        setCount(c => c + 1);
    }

    function subtractCount(){
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }
    return(
        <>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button><br />
        <button onClick={changeColor}>Change Color</button>
        </>
    )
}
export default MyComponent
*/
//#2
import React, {useState, useEffect} from "react";
function MyComponent(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    //WITHOUT useEffect - 888 EVENT LISTENER ADDED which is not good
    // window.addEventListener("resize", handleResize);
    // console.log("EVENT LISTENER ADDED");
    
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED"); 
        
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED"); 
        }
    }, []);

    useEffect(()=>{
        document.title = `Size: ${width} x ${height}`;
    }, [width, height])

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    return(
        <>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
        </>
    );
}

export default MyComponent;