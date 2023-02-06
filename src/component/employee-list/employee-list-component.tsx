import { Fragment } from "react"
import { Outlet } from "react-router-dom"

const EmployeeList = () => {
    const data = [
        { name: "Anom", id: 1, email: "123@gmail.com" , job:'HR'},
        { name: "Megha", id: 2, email: "123@gmail.com", job:'HR' },
        { name: "Subham", id: 3, email: "123@gmail.com", job:'HR'}
      ]
    return (
        <Fragment>
        <div className="employeeList-container">
            <h2><input type="search" placeholder='Search Employee'/> <span>add</span></h2>
          <div className="App">
            <table>
              <tr>
                <th>Action</th>
                <th>Name</th>
                <th>ID</th>
                <th>Email</th>
                <th>Job Title</th>
              </tr>
              {data.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>Edit , Delete</td>
                    <td>{val.name}</td>
                    <td>{val.id}</td>
                    <td>{val.email}</td>
                    <td>{val.job}</td>
                  </tr>
                )
              })}
            </table>
          </div>
        </div>
        </Fragment>
    )
}

export default EmployeeList