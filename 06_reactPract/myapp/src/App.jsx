import List from "./List.jsx";

function App() {

  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Orange", calories: 45 },
    { id: 3, name: "Banana", calories: 105 },
    { id: 4, name: "Coconut", calories: 159 },
    { id: 5, name: "Pineapple", calories: 37 },
  ];

  const vegetables = [
    { id: 6, name: "Potato", calories: 95 },
    { id: 7, name: "Carrot", calories: 25 },
    { id: 8, name: "Broccoli", calories: 34 },
    { id: 9, name: "Cauliflower", calories: 25 },
    { id: 10, name: "Spinach", calories: 23 },
  ];

  return (
    <>
    {fruits.length > 0 && <List items={fruits} catogory="Fruits" />}
    {vegetables.length > 0 && <List items={vegetables} catogory="Vegetables"/>}
    </>
  );
}

export default App
