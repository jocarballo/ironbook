import { useState } from 'react'
import './App.css'
import users from "./users";


function App() {
  
  const [ironhackersList, setIronhackersList] = useState(users)
  console.log(users)


  const filterBySearch = (searchQuery) => {
    const filteredUsers = users.filter(ironhacker => {
      return ironhacker.firstName.toLowerCase().includes(searchQuery.toLowerCase()) || 
        ironhacker.lastName.toLowerCase().includes(searchQuery.toLowerCase())
    });

    console.log('filteredUsers: ', filteredUsers)
    setIronhackersList([...filteredUsers])
  }


  // creating checkbox


  return (
    <div className="App">
      <div className="ironhackersTable">
      <h1>Iron Book</h1>
      <>
        <label htmlFor="search">Search by Name</label>
        <input type="text" onChange={e => filterBySearch(e.target.value)}/>
      </>
      <label>Student</label>
      <input type="checkbox" id="check" ></input>
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
