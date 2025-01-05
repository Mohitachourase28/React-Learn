function Food() {
  //declaring outside return statement
  //inside the return statement you need {}
  // return({}) but outside you don't
  const food1 = "Orange";
  const food2 = "Banana";

  return (
    <ul>
      <li>{food2.toUpperCase()}</li>
      <li>Apple</li>
      <li>{food1.toLowerCase()}</li>
    </ul>
  );
}

export default Food;
