import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import loginvalidation from "../loginvalidation"
import ReCAPTCHA from "react-google-recaptcha";

function SellerLogin(){
    const dispatch=useDispatch()
    const [user,setUser]=useState({
        "userid":"",
        "pwd":""
    })
    const [errors,setErrors]=useState({})
    const [submitted,setSubmitted]=useState(false)
    const [Verifed,setVerifed]=useState(false);
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

    function onChange(value) {
        console.log("Captcha value:", value);
        setVerifed(true);
      }

    return (

<div className="bg-transparent  text-black" style={{  backgroundImage: `url("http://www.thewowstyle.com/wp-content/uploads/2015/02/the-river-in-valley-of-beautiful-mountains-hd-wallpaper-75015.jpg")`}}> 
        
                <div className="col-sm-6 mx-auto" style={{ height:"563px" }}>
                    <h4 className="text-center p-2  " style={{ color:"black" }}>
                        Seller Login Form
                    </h4>
                    <form onSubmit={handleSubmit}>                 
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label">Email Id</label>
                        <div className="col-sm-8">
                            <input type="text" name="userid" value={user.userid} onChange={handleInput} className="form-control" />
                            {errors.userid && <small className="text-danger float-right">{errors.userid}</small>}
                        </div>
                        
                    </div>                    
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label">Password</label>
                        <div className="col-sm-8">
                            <input type="password" name="pwd" value={user.pwd} onChange={handleInput} className="form-control" />
                            {errors.pwd && <small className="text-danger float-right">{errors.pwd}</small>}
                        </div>
                    </div>      
                    <div>

                    <div className="" style={{marginLeft:"273px"}} >
                        <ReCAPTCHA className="col-sm-8"
                                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                onChange={onChange}
                        />
                    </div>   
                   
                    <button className="btn btn-primary float-right" disabled={!Verifed}>Login Now</button>
                        </div>              
                    
                    </form>
                </div>
            </div>
     
     
    );
}

export default SellerLogin;