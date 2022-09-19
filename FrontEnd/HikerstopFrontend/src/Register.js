import React from "react";
import useForm from "./useForm";
import validateInfo from "./validateInfo";
import Navbar from './components/Navbar';
import { useHistory,Link } from "react-router-dom";
import Footer from './Footer';
import './Footer.css';
const Register = () => {
    
    const {handleChange, values, handleSubmit, errors,setEventid} = useForm(validateInfo);
    const history = useHistory();

   
    return(
      <>
       
        <div className='form-content-right'>
    
            <form className='form' onSubmit={handleSubmit}>
                <h1 >
                    Welcome To Hikerstop
                </h1>
                <div className='form-inputs'>
                    <label htmlFor='cname' className='form-lable'>
                        Name: 
                    </label>
                    <input id='cname' type='text' name='cname' className='form-control form-control-sm' placeholder='Enter your name'  value={values.name} onChange={handleChange}  required/>
                    {errors.cname && <span style={{color: "red"}}>{errors.cname}</span>}  
             
                </div>
                <div className='form-inputs'>
                    <label htmlFor='username' className='form-lable' >
                        Username: 
                    </label>
                    <input id='username' type='text' name='username' className='form-control form-control-sm' placeholder='Enter your username' value={values.username} onChange={handleChange} required/>
                    {errors.username && <span style={{color: "red"}}>{errors.username}</span>}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='password' className='form-lable'>
                        Password: 
                    </label>
                    <input id='password' type='password' name='password' className='form-control form-control-sm' placeholder='Enter your password' value={values.password} onChange={handleChange} required/>
                </div>
                <div className='form-inputs'>
                    <label htmlFor='password1' className='form-lable'>
                        Confirm your password: 
                    </label>
                    <input id='password1' type='password' name='password1' className='form-control form-control-sm' placeholder='Re-enter your password' value={values.password1} onChange={handleChange} required/>
                    {errors.password1 && <span  style={{color: "red"}}>{errors.password1}</span>}
                </div>

                <div className='form-inputs'>
                    <label htmlFor='mob_no' className='form-lable'>
                        Mobile No: 
                    </label>
                    <input id='mob_no' type='number' name='mob_no' className='form-control form-control-sm' placeholder='Enter your mobile no' value={values.mob_no} onChange={handleChange} required/>
                    {errors.mob_no && <span  style={{color: "red"}}>{errors.mob_no}</span>}
                </div>

                {/* <div className='form-inputs'>
                    <label htmlFor='email_id' className='form-lable'>
                        Email Id: 
                    </label>
                    <input id='email_id' type='text' name='email_id' className='form-input1' placeholder='Enter your email' value={values.email_id} onChange={handleChange}/>
                    {errors.email_id && <p>{errors.email_id}</p>}
                </div> */}
                <div className='form-inputs'>
                    <label htmlFor='email_id' className="form-label">Email address</label>
                    <input type="email" className="form-control form-control-sm" id='email_id' name='email_id' placeholder="Enter your email" value={values.email_id} onChange={handleChange}   required/>
                    {errors.email_id && <span  style={{color: "red"}}>{errors.email_id}</span>}
                </div>

                {/* <div className='form-inputs'>
                    <label htmlFor='age' className='form-lable'>
                        Age: 
                    </label>
                    <input id='age' type='number' name='age' className='form-input' placeholder='Enter your age' value={values.age} onChange={handleChange}/>
                    {errors.age && <p>{errors.age}</p>}
                </div>                 */}
                <div className='form-inputs'>
                    <label htmlFor='age' className='form-lable'>age</label>
                    <input id='age' type='number' className="form-control form-control-sm"  name='age' placeholder='Enter your age' value={values.age} onChange={handleChange} required/>
                    {errors.age && <span  style={{color: "red"}}>{errors.age}</span>}
                </div>

                {/* <div className='form-inputs'>
                    <label htmlFor='gender' className='form-lable'>
                        Gender: 
                    </label>
                    <select id ='gender' name='gender' value={values.gender}  onChange={handleChange}>
                        <option value='select'>select</option>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                    </select>
                </div> */}
                <div className='form-inputs'>
                    <label htmlFor='gender' className='form-lable'>
                            Gender: 
                        </label>
                    <select className="form-select"  id ='gender' name='gender' value={values.gender}  onChange={handleChange}>
                        <option selected value="Male">Male</option>
                        <option value="Female">Female</option>
                    
                    </select>
                </div>
                {/* <div>
                    <label htmlFor='gender' className='form-lable'>
                        Gender: 
                    </label>
                    <input  type='radio' name='gender' value='male' value={values.gender} onChange={question1}/>Male
                    <input type='radio' name='gender' value='female' value={values.gender} onChange={question1}/>Female
                    <input  type='radio' name='gender' value='other' value={values.gender} onChange={question1}/>Other
                </div> */}

                <div className='form-inputs'>
                    <label htmlFor='adress' className='form-lable'>
                        Address: 
                    </label>
                    
                    <textarea rows='2' cols='50'className='form-control form-control-sm' name='address' form='usrform' placeholder='Enter your address' value={values.address} onChange={handleChange} style={{resize: "none"}} required/>
                    {errors.address && <span  style={{color: "red"}}>{errors.address}</span>}
                </div>
               



                {/* <div className='form-inputs'>
                    <label htmlFor='city' className='form-lable'>
                        City: 
                    </label>
                    <select id='city' name='city' value={values.city}  onChange={handleChange}>
                        <option value='Select'>Select</option>
                        <option value='Jalgoan'>Satara</option>
                        <option value='Kolhapur'>Kolhapur</option>
                        <option value='Raigad'>Raigad</option>
                        <option value='Pune'>Pune</option>
                        <option value='Mumbai'>Mumbai</option>
                        <option value='Jalgoan'>Jalgoan</option>
                        <option value='Other'>Other</option>
                    </select>
                </div> */}
                <div className='form-inputs'>
                <label htmlFor='city' className='form-lable'>
                        City: 
                    </label>
                <select className="form-select" id='city' name='city' value={values.city}  onChange={handleChange}>
                        <option value='Select'>Select</option>
                        <option value='Jalgoan'>Satara</option>
                        <option value='Kolhapur'>Kolhapur</option>
                        <option value='Raigad'>Raigad</option>
                        <option value='Pune'>Pune</option>
                        <option value='Mumbai'>Mumbai</option>
                        <option value='Jalgoan'>Jalgoan</option>
                        <option value='Other'>Other</option>
                   
                </select>
                </div>
                <div className='form-inputs'>
                <button className='form-input-btn' type='submit' onClick={setEventid}>Register</button>
                </div>
                
                 <span className='form-input-login'>Already have an account? <Link className="btn btn-outline-primary" to='/Login'>Login here</Link></span>
                 
               
            </form>
        </div>
      
        </>
      
    )
    
};

export default Register