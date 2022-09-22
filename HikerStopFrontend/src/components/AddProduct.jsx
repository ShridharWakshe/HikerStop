import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import eventvalidation from "./eventvalidation";

function AddProduct(){
    const sellerid=sessionStorage.getItem("id")
    const [event,setEvent]=useState({
        "eventname":"",
        "location":"",
        "eventcat":"",
        "price":"",
        "guideid":sellerid
    })
    const [errors,setErrors]=useState({})
    const [selectedPhoto,setSelectedPhoto]=useState(null)
    const [submitted,setSubmitted]=useState(false)
    const history=useHistory()

    const handleInput=e=>{
        setEvent({...event,[e.target.name]:e.target.value})
    }

    const handleFileInput=e=>{
        setSelectedPhoto(e.target.files[0])
    }

    const handleSubmit=e=>{
        e.preventDefault()
        setErrors(eventvalidation(event))    
        setSubmitted(true)
    }

    useEffect(()=>{
        console.log(errors)
        if(Object.keys(errors).length===0 && submitted){
            const formData=new FormData()
            formData.append("eventname",event.eventname)
            formData.append("location",event.location)
            formData.append("eventcat",event.eventcat)
            formData.append("price",event.price)
            formData.append("pic",selectedPhoto)
            formData.append("guideId",sellerid)
            console.log(event)
            axios.post("http://localhost:9090/api/events",formData)
            .then(resp=>{
                console.log(resp);
                let result=resp.data;
                console.log(result) 
                alert("event saved successfully")               
                history.push("/myproducts")
            })
            .catch(error=>{
                console.log("Error",error);
                alert("Error saving event")
            })            
        }
    },[errors])
    return (
        <div className="container">
                <div className="card shadow bg-dark text-white">
                    <div className="card-body">
                    <div className="row">
                        <div className="col-sm-6 mx-auto">
                            <h4 className="text-center p-2">
                                Add Event Form
                            </h4>
                            <form onSubmit={handleSubmit}>
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label">Event Name</label>
                                <div className="col-sm-8">
                                    <input type="text" name="eventname" value={event.eventname} onChange={handleInput} className="form-control" />
                                    {errors.eventname && <small className="text-danger float-right">{errors.eventname}</small>}
                                </div>
                                
                            </div>                            
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label">Category</label>
                                <div className="col-sm-8">
                                    <select name="eventcat" value={event.eventcat} onChange={handleInput} className="form-control">
                                        <option value="">Select Category</option>
                                        <option>Himalyan Treks</option>     
                                        <option>Jungle Safari</option>     
                                        <option>Local Treks</option>     
                                        <option>Biking</option>     
                                        <option>Winter Treks</option>     
                                        <option>Adventure Sports</option>  
                                        {/* <option>Audio</option> 
                                        <option>AC</option>  */}
                                    </select>   
                                    {errors.eventcat && <small className="text-danger float-right">{errors.eventcat}</small>}                    
                                </div>                        
                            </div>
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label">Price</label>
                                <div className="col-sm-8">
                                    <input type="number" name="price" value={event.price} onChange={handleInput} className="form-control" />
                                    {errors.price && <small className="text-danger float-right">{errors.price}</small>}
                                </div>                                
                            </div>
                            {/* <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label">Location</label>
                                <div className="col-sm-8">
                                    <input type="text" name="eventname" value={event.eventname} onChange={handleInput} className="form-control" />
                                    {errors.eventname && <small className="text-danger float-right">{errors.eventname}</small>}
                                </div>
                                
                            </div> */}
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label">Location</label>
                                <div className="col-sm-8">
                                    <select name="location" value={event.location} onChange={handleInput} className="form-control">
                                        <option value="">Select Location</option>
                                        <option>Maharashtra</option>
                                        <option>Himachal Pradesh</option>
                                        <option>Kerala</option>
                                        <option>Manipur</option>
                                        <option>Meghalaya</option>
                                        <option>Rajasthan</option>
                                        {/* <option>JBL</option>
                                        <option>Apple</option>
                                        <option>Canon</option>
                                        <option>Dell</option>
                                        <option>HP</option>
                                        <option>Nokia</option>
                                        <option>Boat</option>
                                        <option>Nikon</option> */}

                                    </select>
                                    {errors.brand && <small className="text-danger float-right">{errors.brand}</small>}
                                </div>                                
                            </div>

                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label">Photo</label>
                                <div className="col-sm-8">
                                    <input type="file" required name="photo" value={event.photo} onChange={handleFileInput} className="form-control-file" />                                    
                                </div>                                
                            </div>
                            
                            <button className="btn btn-primary float-right">Add event</button>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
                </div>
    )
}

export default AddProduct;
