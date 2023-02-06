import { Fragment } from "react"
import { Outlet } from "react-router-dom"

const AppTitle = () => {

    return (
        <Fragment>
            <h1>EMPLOYEES DATABASE</h1>
        <Outlet/>
        </Fragment>
    )
}

export default AppTitle