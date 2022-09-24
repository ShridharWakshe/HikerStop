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
   
            <div className="bg-transparent  text-black" style={{  backgroundImage: `url("http://www.thewowstyle.com/wp-content/uploads/2015/02/the-river-in-valley-of-beautiful-mountains-hd-wallpaper-75015.jpg")`}}>
       
       <div className="col-sm-6 mx-auto" style={{ height:"563px" }}>
                    <h4 className="text-center p-2  " style={{ color:"black" }}>
                        Customer Registration Form
                    </h4>
                    <form onSubmit={handleSubmit}>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label">Customer Name</label>
                        <div className="col-sm-8">
                            <input type="text" name="name" value={user.name} onChange={handleInput} className="form-control" />
                            {errors.name && <small className="text-danger float-right">{errors.name}</small>}
                        </div>
                        
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label">City</label>
                        <div className="col-sm-8">
                            <input type="text" name="city" value={user.city} onChange={handleInput} className="form-control" />
                            {errors.city && <small className="text-danger float-right">{errors.city}</small>}
                        </div>                        
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label">Gender</label>
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
                        <label className="col-sm-4 form-control-label">Email Id</label>
                        <div className="col-sm-8">
                            <input type="text" name="userid" value={user.userid} onChange={handleInput} className="form-control" />
                            {errors.userid && <small className="text-danger float-right">{errors.userid}</small>}
                        </div>
                        
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label">Phone</label>
                        <div className="col-sm-8">
                            <input type="text" maxLength="10" name="phone" value={user.phone} onChange={handleInput} className="form-control" />
                            {errors.phone && <small className="text-danger float-right">{errors.phone}</small>}
                        </div>
                        
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label">Password</label>
                        <div className="col-sm-8">
                            <input type="password" name="pwd" value={user.pwd} onChange={handleInput} className="form-control" />
                            {errors.pwd && <small className="text-danger float-right">{errors.pwd}</small>}
                        </div>
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label">Confirm Password</label>
                        <div className="col-sm-8">
                            <input type="password" name="cpwd" value={user.cpwd} onChange={handleInput} className="form-control" />
                            {errors.cpwd && <small className="text-danger float-right">{errors.cpwd}</small>}
                        </div>
                    </div>
                    <button className="btn btn-primary float-right">Register Now</button>
                    </form>
                </div>
            </div>
       
    )
}

export default RegCustomer;
