import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

const FormInput = () => {

  const handleSubmit = (event: any) => {
    event.preventDefault(); 
  }
    return (
      <Fragment>
      <div className='log-in-container'>
        <form //onSubmit={}
        >
        <input type="email" placeholder=" Enter Email Address" required/><br/>
        <input type="password" placeholder="Enter Password" required/><br />
        <button type='submit'>Log in</button> <Link to='/create'>Create Account</Link>
        </form>
      </div>  
     
      </Fragment>

    )
}

export default FormInput;