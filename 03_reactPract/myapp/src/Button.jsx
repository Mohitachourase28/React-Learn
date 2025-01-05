// import './Button.css'

function Button() {
  const styles = {
    
      backgroundColor: "blue",
      color: "white",
      border: "none",
      margin: "10px",
      padding: "5px 15px",
      borderRadius: "5px",
      cursor: "pointer",

  }
  return (
      // <button className="button">Click Me!!</button>
      <button style={styles}>Click Me!!</button>

  );
}

export default Button;
