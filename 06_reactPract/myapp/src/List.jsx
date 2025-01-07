/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
// render lists
import propTypes from 'prop-types';
import './index.css'

function List(props) {
  // const fruits = ["Apple", "Orange", "Banana", "Coconut", "Pineapple"];
  //  return(fruits);

//   const fruits = [
//     { id: 1, name: "Apple", calories: 95 },
//     { id: 2, name: "Orange", calories: 45 },
//     { id: 3, name: "Banana", calories: 105 },
//     { id: 4, name: "Coconut", calories: 159 },
//     { id: 5, name: "Pineapple", calories: 37 },
//   ];

  //sorting object by name property
  {/**ALPHABETICAL */}
  // fruits.sort((a, b)=> a.name.localeCompare(b.name));

  {/** REVERSE ALPHABETICAL */}
  // fruits.sort((a, b)=> b.name.localeCompare(a.name));

  {/**SORT BY CALORIES NUMERIC*/}
  // fruits.sort((a,b) => a.calories - b.calories);

  {/**SORT BY CALORIES REVERSE NUMERIC*/}
  // fruits.sort((a,b) => b.calories - a.calories);


//   const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
//   const listItems = lowCalFruits.map((lowCalFruit) => (

//     <li key={lowCalFruit.id}>
//       {lowCalFruit.name}: &nbsp;
//       <b>{lowCalFruit.calories}</b>
//     </li>
//   ));

//   const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);
//   const listItems = highCalFruits.map((highCalFruit) => (

//     <li key={highCalFruit.id}>
//       {highCalFruit.name}: &nbsp;
//       <b>{highCalFruit.calories}</b>
//     </li>
//   ));

    const catogory = props.catogory;
    const itemList = props.items;

    const listItems = itemList.map(item =>
    <li key={item.id}>
        {item.name}: &nbsp;
        <b>{item.calories}</b>
    </li>);

  return(
  <>
    <h3 className='list-category'>{catogory}</h3>
    <ol className='list-items'>{listItems}</ol>
  </>
  );
}
List.propTypes = {
    catogory: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({id: propTypes.number, 
                                            name: propTypes.string, 
                                            calories: propTypes.number})),
}
List.defaultProps = {
    catogory: "Category",
    items: [],
}
export default List;
