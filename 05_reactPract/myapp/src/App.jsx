// Conditional rendering = allows you to control what gets rendered 
//                         in your application base on certain conditions 
//                         (shows, hide, or change components)

import UserGreeting from "./UserGreeting.jsx"

function App() {
  return (
    <UserGreeting isLoggedIn/>
  )
}

export default App
