import './index.css'

function Button(){
    /** 
    // const handleClick = () => console.log("OUCH!");

    // const handleClick2 = (name) => console.log(`${name} stop Clicking me!!`);

    // let count = 0;
    // const handleClick = (name) => {
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} times`);
    //     }
    //     else{
    //         console.log(`${name} stop Clicking me!`);
    //     }
    // };
    */

    //event = e
    const handleClick = (e) => e.target.textContent = "OUCH 🤕!!";
    
    return(
        //using arrow function or else it will automatically excute in console log
        // <button onClick={()=>handleClick2("Mohita")}>Click Me!😊</button>
        <button onDoubleClick={(e) => handleClick(e)}>Click Me!😊</button>
    );
}

export default Button