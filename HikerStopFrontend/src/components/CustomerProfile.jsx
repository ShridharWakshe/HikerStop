import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

function CustomerProfile(){
    const [uname,setUname]=useState(sessionStorage.getItem("uname"))
    const userid=sessionStorage.getItem("userid")
    const id=sessionStorage.getItem("id")

    const [user,setUser]=useState({
        "id":sessionStorage.getItem("id"),
        "name":"",
        "city":"",
        "userid":"",
        "pwd":"",
        "phone":"",
        "gender":""
    })

    

    useEffect(()=>{
        axios.get("http://localhost:9090/api/customers/"+id)
        .then(resp=>{
            console.log(resp.data.data)
            setUser(resp.data.data)
        })
    },[])
 
    const handleInput=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault() 
        axios.put("http://localhost:9090/api/customers/"+id,user)
        .then(resp=>{
            alert("Profile updated successfully")
            setUname(user.name)
        })     
    }

    return (
        
        <div className="bg-transparent  text-black" style={{  backgroundImage: `url("http://www.thewowstyle.com/wp-content/uploads/2015/02/the-river-in-valley-of-beautiful-mountains-hd-wallpaper-75015.jpg")`}}> 
        
        <div className="col-sm-6 mx-auto " style={{ height:"650px" }}>
          
            <div className="  bg-transparent text-black text-center">
                <h4 className="p-2" style={{borderBottom:"2px solid green",width:"300px",margin:"auto"}}>Customer Profile Page</h4>
                <br/>
                <h4>Welcome {user.name}</h4>
                <h5>City : {user.city}</h5>
                <h5>Email Id : {user.userid}</h5>
                <h5>Contact No : {user.phone}</h5>
        
        </div>
        <hr/>
           
                <div className="col-sm-12 mx-auto" style={{ marginLeft:"-500px" }}>
                    <div className=" text-black bg-transparent ">
                        <div className="card-body">
                        
            <h4 className="p-2 text-black text-center">Update your Profile {uname}</h4>            
            <form onSubmit={handleSubmit}>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label"><h5>Customer Name</h5></label>
                        <div className="col-sm-8">
                            <input type="text" name="name" value={user.name} onChange={handleInput} className="form-control" />                        
                        </div>
                        
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label">City</label>
                        <div className="col-sm-8">
                            <input type="text" name="city" value={user.city} onChange={handleInput} className="form-control" />                        
                        </div>                        
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label">Gender</label>
                        <div className="col-sm-8">
                            <select required name="gender" value={user.gender} onChange={handleInput} className="form-control">
                                <option value="">Select Gender</option>
                                <option>Male</option>     
                                <option>Female</option>     
                            </select>                       
                        </div>                        
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label">Email Id</label>
                        <div className="col-sm-8">
                            <input type="text" readOnly name="userid" value={user.userid} onChange={handleInput} className="form-control" />                        
                        </div>
                        
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label">Phone</label>
                        <div className="col-sm-8">
                            <input type="text" maxLength="10" name="phone" value={user.phone} onChange={handleInput} className="form-control" />                        
                        </div>
                        
                    </div>
                    {/* <div className="form-group form-row">
                        <label className="col-sm-4 form-control-label">Password</label>
                        <div className="col-sm-8">
                            <input type="password" name="pwd" value={user.pwd} onChange={handleInput} className="form-control" />                        
                        </div>
                    </div>                     */}
                    <button className="btn btn-primary float-right">Update Profile</button>
                    </form>                           
        </div>
            
        </div>
                    </div>
                </div>
            </div>
        
            
    )
}

export default CustomerProfile;
