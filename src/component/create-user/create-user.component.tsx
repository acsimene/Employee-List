import { Fragment } from "react"
import { Outlet } from "react-router-dom"

const CreateUser = () => {

    return (
        <Fragment>
            <Outlet/>
        <div className='create-user-container'>
            <form>
                <input type="text" placeholder="Display Name" required/><br />
                <input type="text" placeholder="Username" required/><br />
                <input type="password" placeholder="Password" required /><br />
                <input type="password" placeholder="Confirm Password" required /><br />
                <button type="submit">Create</button>
            </form>
        </div>
        </Fragment>

    )
}

export default CreateUser