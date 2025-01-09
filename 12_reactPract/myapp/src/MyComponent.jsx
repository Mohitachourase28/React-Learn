/* eslint-disable no-unused-vars */
/**12. 02:30:45 update OBJECTS in state 🚗 */
import React, {useState} from "react";

function MyComponent(){

    const [car, setCar] = useState({year: 2024, 
                                    make: "Ford", 
                                    model:"Mustang"});

    function handleYearChange(event){
        //js think we are tryna use multiline statement and 
        // that's not the case so we use ()
        setCar(c => ({...car, year: event.target.value}));
    }

    function handleMakeChange(event){
        setCar(c => ({...car, make: event.target.value}));
    }

    function handleModelChange(event){
        setCar(c => ({...car, model: event.target.value}));
    }
    return(
        <div>
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

            <p>Year:</p>
            <input type= "number" value={car.year} onChange={handleYearChange} /><br/>
            <p>Brand:</p>
            <input type= "text" value={car.make} onChange={handleMakeChange}/><br/>
            <p>Model:</p>
            <input type= "text" value={car.model} onChange={handleModelChange}/><br/>
        </div>
    );

}
export default MyComponent;