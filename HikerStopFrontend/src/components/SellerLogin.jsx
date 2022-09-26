import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import loginvalidation from "../loginvalidation"


function SellerLogin(){
    const dispatch=useDispatch()
    const [user,setUser]=useState({
        "userid":"",
        "pwd":""
    })
    const [errors,setErrors]=useState({})
    const [submitted,setSubmitted]=useState(false)
    const history=useHistory()

    const handleInput=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleSubmit=e=>{
        e.preventDefault()
        setErrors(loginvalidation(user)) 
        setSubmitted(true)   
    }

    useEffect(()=>{
        console.log(errors)
        if(Object.keys(errors).length===0 && submitted){
            console.log(user)
            axios.post("http://localhost:9090/api/sellers/validate",user)
            .then(resp=>{
                let result=resp.data.data;
                console.log(resp.data.data)
                sessionStorage.setItem("id",result.id)
                sessionStorage.setItem("userid",result.userid)//userid in both customer and seller
                sessionStorage.setItem("uname",result.name)
                sessionStorage.setItem("role","seller")
               // sessionStorage.setItem("id",result.id)
                dispatch({type:'IsLoggedIn'})
                history.push("/sprofile")
            })
            .catch(error=>{
                console.log("Error",error);
                alert("Invalid username or password")
            })            
        }
    },[errors])


    return (

<div className="" style={{ backgroundImage: `url("https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,backgroundSize:"cover"}}>

        
                <div className="col-sm-6 mx-auto" style={{ height:"563px" }}>
                    <h4 className="text-center p-4  " style={{ color:"black" }}>
                        Guide Login Form
                    </h4>
                    <form onSubmit={handleSubmit}>                 
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label font-weight-bold">Email Id</label>
                        <div className="col-sm-10">
                            <input type="text" name="userid" value={user.userid} onChange={handleInput} className="form-control" />
                            {errors.userid && <small className="text-danger float-right">{errors.userid}</small>}
                        </div>
                        
                    </div>                    
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label font-weight-bold">Password</label>
                        <div className="col-sm-10">
                            <input type="password" name="pwd" value={user.pwd} onChange={handleInput} className="form-control" />
                            {errors.pwd && <small className="text-danger float-right">{errors.pwd}</small>}
                        </div>
                    </div>      
                    <div>
                   
                    <button className="btn btn-primary float-center mt-1">Login Now</button>
                    <div className="clearfix"></div>
                        </div>              
                    
                    </form>
                </div>
            </div>
     
     
    );
}

export default SellerLogin;