/**14. 02:48:55 update ARRAY of OBJECTS in state 🚘 */

import { useState } from "react"

function MyComponent(){

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(){
        const newCar = {year: carYear,
                        make: carMake,
                        model: carModel
        };

        setCars(c => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index){
        setCars(c => c.filter((_, i) => i !== index));
    }

    function handleYearChange(event){
        setCarYear(event.target.value);
    }

    function handleMakeChange(event){
        setCarMake(event.target.value);
    }

    function handleModelChange(event){
        setCarModel(event.target.value);
    }

    return(
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((car, index) => 
                <li key={index} onClick={() => handleRemoveCar(index)}>
                    {car.year} {car.make} {car.model}
                </li>
                )}
            </ul>
            <input type="number" onChange={handleYearChange} value={carYear} /><br/>
            <input type="text" onChange={handleMakeChange} value={carMake} 
                   placeholder="Enter the Brand"/><br/>
            <input type="text" onChange={handleModelChange} value={carModel} 
                   placeholder="Enter the Model"/><br/>
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );
}

export default MyComponent