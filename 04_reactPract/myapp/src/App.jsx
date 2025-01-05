
import Student from "./Student";

function App() {
  return (
    <> 
    
    {/* <Student name="Mohita" age="19" isStudent={true}/> age cannot be a string*/}
    <Student name="Sakshi" age={21} isStudent={true}/>
    <Student name="Niharika" age={19} isStudent={true}/>
    <Student name="Sayna" age={20} isStudent={true}/>
    <Student/>{/**Default Prop */}
    </>
  );
}

export default App;
