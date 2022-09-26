import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import uservalidation from "../uservalidation"

function RegCustomer()
{
    const [user,setUser]=useState({
        "name":"",
        "city":"",
        "userid":"",
        "pwd":"",
        "cpwd":"",
        "phone":"",
        "gender":""
    })
    const [errors,setErrors]=useState({})
    const history=useHistory()
    const [submitted,setSubmitted]=useState(false)
 
    const handleInput=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setErrors(uservalidation(user)) 
        if(!user.gender){
            errors.gender="Gender is required"
        }
        setSubmitted(true)      
    }

    useEffect(()=>{

        if(!user.gender){
            errors.gender="Gender is required"
        }

        console.log(errors)
        
        if(Object.keys(errors).length===0 && submitted){
            console.log(user)
            axios.post("http://localhost:9090/api/customers",user)
            .then(resp=>{
                console.log(resp)
                alert("Customer registered successfully")
                history.push("/clogin")
            })
            .catch(error=>{
                console.log("Error",error)
                alert("This Email is already Registered. Try using another Email id")
            })            
        }
    },[errors])
    return (
   

        <div className="" style={{ backgroundImage: `url("https://ukbungee.co.uk/files/image/1555/1651134350_bungee142.png")`,backgroundSize:"cover"}}> 

       
       <div className="col-sm-6 mx-auto" style={{ height:"563px" }}>
                    <h4 className="text-center p-2  " style={{ color:"black" }}>
                        Customer Registration Form
                    </h4>
                    <form onSubmit={handleSubmit}>
                    <div className="form-group form-row">

                        <label className="col-sm-4 form-control-label font-weight-bold ">Customer Name</label>
                        <div className="col-sm-8">
                            <input type="text" name="name" placeholder="Please enter your name" value={user.name} onChange={handleInput} className="form-control" />

                            {errors.name && <small className="text-danger float-right">{errors.name}</small>}
                        </div>
                        
                    </div>
                    <div className="form-group form-row">

                        <label className="col-sm-4 form-control-labe font-weight-bold">City</label>
                        <div className="col-sm-8">
                            <input type="text" name="city" placeholder="Please enter your city" value={user.city} onChange={handleInput} className="form-control" />

                            {errors.city && <small className="text-danger float-right">{errors.city}</small>}
                        </div>                        
                    </div>
                    <div className="form-group form-row">

                        <label className="col-sm-4 form-control-label font-weight-bold">Gender</label>

                        <div className="col-sm-8">
                            <select name="gender" value={user.gender} onChange={handleInput} className="form-control">
                                <option value="">Select Gender</option>
                                <option>Male</option>     
                                <option>Female</option>     
                            </select> 
                            {errors.gender && <small className="text-danger float-right">{errors.gender}</small>}                      
                        </div>                        
                    </div>
                    <div className="form-group form-row">

                        <label className="col-sm-4 form-control-label font-weight-bold">Email Id</label>
                        <div className="col-sm-8">
                            <input type="text" name="userid" placeholder="Please enter your emailid" value={user.userid} onChange={handleInput} className="form-control" />

                            {errors.userid && <small className="text-danger float-right">{errors.userid}</small>}
                        </div>
                        
                    </div>

                        <label className="col-sm-4 form-control-label font-weight-bold">Mobile No</label>
                        <div className="col-sm-8">
                            <input type="text" maxLength="10" name="phone" placeholder="Please enter your mobile no" value={user.phone} onChange={handleInput} className="form-control" />

                            {errors.phone && <small className="text-danger float-right">{errors.phone}</small>}
                        </div>
                        
                    </div>
                    <div className="form-group form-row">

                        <label className="col-sm-4 form-control-label font-weight-bold">Password</label>
                        <div className="col-sm-8">
                            <input type="password" name="pwd" placeholder="Please enter your password" value={user.pwd} onChange={handleInput} className="form-control" />

                            {errors.pwd && <small className="text-danger float-right">{errors.pwd}</small>}
                        </div>
                    </div>
                    <div className="form-group form-row">

                        <label className="col-sm-4 form-control-label font-weight-bold">Confirm Password</label>
                        <div className="col-sm-8">
                            <input type="password" name="cpwd" placeholder="Please enter your confirm password"value={user.cpwd} onChange={handleInput} className="form-control" />
                            {errors.cpwd && <small className="text-danger float-right">{errors.cpwd}</small>}
                        </div>
                    </div>
                    <button className="btn btn-primary float-right font-weight-bold">Register Now</button>

                    </form>
                </div>
            </div>
       
    )
}

export default RegCustomer;
