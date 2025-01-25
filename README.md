# React-Learn  
## [01_reactPract](./01_reactPract/myapp/src/Food.jsx)  
### README.md  

# Topics Covered in React Development 🚀  
---
## **1. Declaring Variables and JSX Syntax**  
- **Declaring Outside the Return Statement**:  
  Variables or functions can be declared outside the `return` statement without using `{}`.  

- **Inside the Return Statement**:  
  JSX expressions inside the `return` statement must be wrapped with `{}`.  
  ```javascript  
  const message = "Hello, World!";  
  return (  
    <div>  
      <h1>{message}</h1>  
    </div>  
  );  
  ```  

## [02_reactPract](./02_reactPract/myapp/src/Card.jsx)  
### **Project:** Built a Card Component in React 🃏  

---  

## [03_reactPract](./03_reactPract/myapp/src/App.jsx)  
## **2. Styling React Components**  
React components can be styled in multiple ways without external frameworks or preprocessors.  

### **Types of Styling**  
1. **External CSS**  
   - Link an external CSS file and apply class names.  
   ```javascript  
   import './App.css';  
   function App() {  
     return <div className="container">Hello World!</div>;  
   }  
   ```  

2. **CSS Modules**  
   - Use `.module.css` files for scoped styles.  
   ```javascript  
   import styles from './App.module.css';  
   function App() {  
     return <div className={styles.container}>Hello World!</div>;  
   }  
   ```  

3. **Inline Styles**  
   - Define styles directly in the `style` attribute.  
   ```javascript  
   function App() {  
     return <div style={{ color: 'blue', fontSize: '20px' }}>Hello World!</div>;  
   }  
   ```  

---  

## [04_reactPract](./04_reactPract/myapp/src/Student.jsx)  
## **3. Props (Properties)**  
Props are **read-only** properties shared between components.  
- A parent component passes data to a child component using props.  
- **Example:**  
  ```javascript  
  function Greeting({ name }) {  
    return <h1>Hello, {name}!</h1>;  
  }  
  <Greeting name="John" />;  
  ```  

### **PropTypes**  
Ensures that props are of the correct type.  
```javascript  
import PropTypes from 'prop-types';  
Greeting.propTypes = {  
  name: PropTypes.string,  
};  
```  

### **defaultProps**  
Sets default values for props if none are provided.  
```javascript  
Greeting.defaultProps = {  
  name: 'Guest',  
};  
```  

---  

## [05_reactPract](./05_reactPract/myapp/src/UserGreeting.jsx)  
## **4. Conditional Rendering**  
Control what gets rendered based on certain conditions.  
```javascript  
function App({ isLoggedIn }) {  
  return isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Log In</h1>;  
}  
```  

---  

## [06_reactPract](./06_reactPract/myapp/src/List.jsx)  
## **5. Rendering Lists**  
Use `map()` to render lists dynamically using props.  
```javascript  
const items = ['Apple', 'Banana', 'Cherry'];  
function App() {  
  return (  
    <ul>  
      {items.map((item, index) => (  
        <li key={index}>{item}</li>  
      ))}  
    </ul>  
  );  
}  
```  

---  

## [07_reactPract](./07_reactPract/myapp/src/ProfilePicture.jsx)  
## **6. Event Handling: Click Events**  
Respond to user interactions by passing a callback function.  
```javascript  
function App() {  
  const handleClick = () => alert('Button Clicked!');  
  return <button onClick={handleClick}>Click Me</button>;  
}  
```  

---  

## [08_reactPract](./08_reactPract/myapp/src/MyComponent.jsx)  
## **7. React Hooks**  
React hooks allow functional components to use features like state and lifecycle methods.  

### **useState Hook**  
Used for creating and updating state variables.  
```javascript  
const [count, setCount] = useState(0);  
setCount(count + 1);  
```  

### **useEffect Hook**  
Runs side effects like fetching data, subscriptions, and DOM manipulation.  
```javascript  
useEffect(() => {  
  console.log('Component mounted or updated');  
}, [dependency]);  
```  

---  

## [09_reactPract](./09_reactPract/myapp/src/MyComponent.jsx)  
## **8. onChange Event Handler** 🚦  
Capture user input dynamically using the `onChange` event.  

```javascript  
function InputHandler() {  
  const [value, setValue] = useState('');  

  const handleChange = (event) => {  
    setValue(event.target.value);  
  };  

  return (  
    <div>  
      <input type="text" onChange={handleChange} />  
      <p>Input: {value}</p>  
    </div>  
  );  
}  
```  

---  

## **Projects Built**  
## [10_reactPract](./10_reactPract/myapp/src/ColorPicker.jsx)  
1. **Color Picker App 🎨**: Allowed users to select and display a color.  

## [15_reactPract](./15_reactPract/myapp/src/ToDoList.jsx)  
2. **To-Do List App ☝**: Managed tasks using state.  

## [17_reactPract](./17_reactPract/myapp/src/DigitalClock.jsx)  
3. **Digital Clock App 🕒**: Displayed the current time using `useEffect`.  

## [20_reactPract](./20_reactPract/myapp/src/Stopwatch.jsx)  
4. **Stopwatch App ⏱**: Implemented a stopwatch using `useRef` and state.  

---  

React is powerful and versatile for building interactive UIs. These projects demonstrate practical applications of React concepts. Keep exploring! 🌟