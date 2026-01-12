import React, { useState } from 'react'

const App = () => {
  const[isLoggedIn, setLoggedIn]= useState(false)
  const user = "Vaishnavi"
  return (
    <div>
      <p>{isLoggedIn? `Welcome  ${user}`: "Please Login"}</p>
      <button onClick={()=> setLoggedIn(prev=> !prev)}>{isLoggedIn? "Logout": "Login"}</button>
    </div>
  )
}

export default App