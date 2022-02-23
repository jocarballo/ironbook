import { useState } from 'react'
import './App.css'
import users from "./users";


function App() {
  
  const [ironhackersList, setIronhackersList] = useState(users)
  console.log(users)

  return (
    <div className="App">
      <div className="ironhackersTable">
      <h1>Iron Book</h1>
      <table>
      <tbody>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Campus</th>
          <th>Role</th>
          <th>Links</th>
        </tr>
        {ironhackersList.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.firstName}</td>
              <td>{val.lastName}</td>
              <td>{val.campus}</td>
              <td>{val.role}</td>
              <td>{val.linkedin && "📝"}</td>
            </tr>
           
          )
        })}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default App
