import React from "react";
import useAdminLogin from "./useAdminLogin";
import validateInfo from "./validateInfo";
import Navbar from "./components/Navbarhome";
import { useHistory } from "react-router-dom";
import { Nav } from 'react-bootstrap'
//import { LinkContainer } from 'react-router-bootstrap'
import "./AdminLogin.css";
import Home from "./components/pages/Home";


const AdminLogin = () => {
    const {handleChange, values, handleSubmit1, errors} = useAdminLogin(validateInfo);

    const history = useHistory();
  
    // async function handleSubmit(event) {
    //     event.preventDefault();
      
    //     try {
    //       await Auth.signIn(username, password);
    //       userHasAuthenticated(true);
    //       history.push("/Evtable");
    //     } catch (e) {
    //       alert(e.message);
    //     }
    //   }
    return(
        <div className="images2">
            <Navbar/>
            <div className='login-container'>
            <form className='login-form' onSubmit={handleSubmit1}>
                <h1>
                    Admin Login
                </h1><br></br>
                <div className='login-input'>
                    <lable htmlFor='html' className='login-label'>
                        Username 
                    </lable>
                    <input id='username' type='text' name='username' className='login-text-input' placeholder='Enter your username' value={values.username} onChange={handleChange} />
                    {errors.username && <p>{errors.username}</p>}
                </div><br></br>

                <div className='login-input'>
                    <lable htmlFor='html' className='login-label'>
                        Password 
                    </lable>
                    <input id='password' type='password' name='password' className='login-text-input' placeholder='Enter your password' value={values.password} onChange={handleChange} />
                    {errors.username && <p>{errors.username}</p>}
                </div><br></br>

                <button className='login-input-btn' type='submit'   >Login</button>
                
            </form>
        </div>
        </div>
        
)
}

export default AdminLogin