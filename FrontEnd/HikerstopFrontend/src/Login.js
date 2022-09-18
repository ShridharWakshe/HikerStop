import React from "react";
import useLogin from "./useLogin";
import validateInfo from "./validateInfo";
import Navbar from "./components/Navbarhome";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Footer";
import { Nav } from 'react-bootstrap'
//import { LinkContainer } from 'react-router-bootstrap'
import "./Login.css";
import Home from "./components/pages/Home";


const Login = () => {
    const {handleChange, values, handleSubmit, errors} = useLogin(validateInfo);

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
        <div className="images1">
            <ToastContainer/>
            <Navbar/>
            <div className='login-container'>
            <form className='login-form' onSubmit={handleSubmit}>
                <h1>
                    Welcome To Hikerstop
                </h1>
                <div className='login-input'>
                    <lable htmlFor='html' className='login-label'>
                        Username 
                    </lable>
                    <input id='username' type='text' name='username' className='login-text-input' placeholder='Enter your username' value={values.username} onChange={handleChange} />
                    {errors.username && <p>{errors.username}</p>}
                </div>

                <div className='login-input'>
                    <lable htmlFor='html' className='login-label'>
                        Password 
                    </lable>
                    <input id='password' type='password' name='password' className='login-text-input' placeholder='Enter your password' value={values.password} onChange={handleChange} />
                    {errors.username && <p>{errors.username}</p>}
                </div>

                <button className='login-input-btn' type='submit'   >Login</button>
                <span className='form-input-register'>Do not have Account? <a href='\Register/1'>Register Now</a>
        
             </span>
            </form>
            {/* <footer/> */}
        </div>
       
        </div>
        
)
}

export default Login