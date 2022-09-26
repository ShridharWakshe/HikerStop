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
        "date":"",
        "description":"",
        "guideid":sellerid
    })
    const [errors,setErrors]=useState({})
    const [selectedPhoto1,setSelectedPhoto1]=useState(null)
    const [selectedPhoto2,setSelectedPhoto2]=useState(null)
    const [selectedPhoto3,setSelectedPhoto3]=useState(null)
    const [qty,setQty]=useState(1)
    const [submitted,setSubmitted]=useState(false)
    const history=useHistory()

    const handleInput=e=>{
       
        setEvent({...event,[e.target.name]:e.target.value})
    }

    const handleFileInput1=e=>{
        setSelectedPhoto1(e.target.files[0])
    }
    const handleFileInput2=e=>{
        setSelectedPhoto2(e.target.files[0])
    }
    const handleFileInput3=e=>{
        setSelectedPhoto3(e.target.files[0])
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
            formData.append("description",event.description)
            formData.append("noofdays",event.noofdays)
            formData.append("date",event.date)
            formData.append("dailywiseschedule",event.dailywiseschedule)
            formData.append("thingstocarry",event.thingstocarry)
            formData.append("pickupanddroplocation",event.pickupanddroplocation)
            formData.append("pic1",selectedPhoto1)
            formData.append("pic2",selectedPhoto2)
            formData.append("pic3",selectedPhoto3)
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
        <div className="bg-transparent  text-black" style={{  backgroundImage: `url("http://www.thewowstyle.com/wp-content/uploads/2015/02/the-river-in-valley-of-beautiful-mountains-hd-wallpaper-75015.jpg")`}}> 
        
                <div className="col-sm-6 mx-auto" style={{ height:"1000px" }}>
                    <h4 className="text-center p-2  " style={{ color:"black" }}>
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
                                    
                                    </select>   
                                    {errors.eventcat && <small className="text-danger float-right">{errors.eventcat}</small>}                    
                                </div>                        
                            </div>
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label">State</label>
                                <div className="col-sm-8">
                                    <select name="location" value={event.location} onChange={handleInput} className="form-control">
                                        <option value="">Select State</option>
                                        <option>Andhra Pradesh</option>
                                        <option>Arunachal Pradesh</option>
                                        <option>Assam</option>
                                        <option>Bihar</option>
                                        <option>Chhattisgarh</option>
                                        <option>Goa</option>
                                        <option>Gujarat</option>
                                        <option>Haryana</option>
                                        <option>Himachal Pradesh</option>
                                        <option>Jharkhand</option>
                                        <option>Karnataka</option>
                                        <option>Kerala</option>
                                        <option>Madhya Pradesh</option>
                                        <option>Maharashtra</option>
                                        <option>Manipur</option>
                                        <option>Meghalaya</option>
                                        <option>Mizoram</option>
                                        <option>Nagaland</option>
                                        <option>Odisha</option>
                                        <option>Punjab</option>
                                        <option>Rajasthan</option>
                                        <option>Sikkim</option>
                                        <option>Tamil Nadu</option>
                                        <option>Telangana</option>
                                        <option>Tripura</option>
                                        <option>Uttar Pradesh</option>
                                        <option>Uttarakhand	</option>
                                        <option>West Bengal</option>
                                     

                                    </select>
                                    {errors.brand && <small className="text-danger float-right">{errors.brand}</small>}
                                </div>                                
                            </div>
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label">Price</label>
                                <div className="col-sm-8">
                                    <input type="number" name="price" value={event.price} onChange={handleInput} className="form-control" />
                                    {errors.price && <small className="text-danger float-right">{errors.price}</small>}
                                </div>                                
                            </div>
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label">Description</label>
                                <div className="col-sm-8">
                                    {/* <input type="text" name="eventname" value={event.eventname} onChange={handleInput} className="form-control" /> */}
                                    <textarea className="form-control" rows="5"  name="description" value={event.description} onChange={handleInput} style={{resize:"none"}}></textarea>
                                    {errors.description && <small className="text-danger float-right">{errors.description}</small>}
                                </div>
                                
                            </div>
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label">set Event Date</label>
                                <div className="col-sm-8">
                                    <input type="date" name="date" value={event.date} onChange={handleInput} className="form-control"
                                    />
                                    
                                </div>                                
                            </div>     

                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label">Number of days</label>
                                <div className="col-sm-8">
                                    <input type="number" name="noofdays" value={event.noofdays} onChange={handleInput} className="form-control" />
                                    {errors.noofdays && <small className="text-danger float-right">{errors.noofdays}</small>}
                                </div>                                
                            </div>

                    

                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label">Daily Schedule</label>
                                <div className="col-sm-8">
                                    {/* <input type="text" name="eventname" value={event.eventname} onChange={handleInput} className="form-control" /> */}
                                    <textarea className="form-control" rows="5"  name="dailywiseschedule" value={event.dailywiseschedule} onChange={handleInput} style={{resize:"none"}}></textarea>
                                    {errors.dailywiseschedule && <small className="text-danger float-right">{errors.dailywiseschedule}</small>}
                                </div>
                                
                            </div>     

                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label">Things to Carry</label>
                                <div className="col-sm-8">
                                    {/* <input type="text" name="eventname" value={event.eventname} onChange={handleInput} className="form-control" /> */}
                                    <textarea className="form-control" rows="5"  name="thingstocarry" value={event.thingstocarry} onChange={handleInput} style={{resize:"none"}}></textarea>
                                    {errors.thingstocarry && <small className="text-danger float-right">{errors.thingstocarry}</small>}
                                </div>
                                
                            </div>    

                             <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label">Pickup and Drop </label>
                                <div className="col-sm-8">
                                    <select name="pickupanddroplocation" value={event.pickupanddroplocation} onChange={handleInput} className="form-control">
                                        <option value="">Select Location</option>
                                        <option>Pune to Pune</option>
                                        <option>Mumbai To Mumbai</option>
                                        <option>Delhi to Delhi</option>
                                     

                                    </select>
                                    {errors.pickupandDropLocation && <small className="text-danger float-right">{errors.pickupandDropLocation}</small>}
                                </div>                                
                            </div> 


                            {/* <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label">Description</label>
                                <div className="col-sm-8">
                                    <input type="number" name="price" value={event.description} onChange={handleInput} className="form-control" />
                                    <textarea className="form-control" rows="5" id="comment" name="price" value={event.description} onChange={handleInput}></textarea>
                                    {errors.description && <small className="text-danger float-right">{errors.description}</small>}
                                </div>                                
                            </div> */}
                            {/* <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label">Location</label>
                                <div className="col-sm-8">
                                    <input type="text" name="eventname" value={event.eventname} onChange={handleInput} className="form-control" />
                                    {errors.eventname && <small className="text-danger float-right">{errors.eventname}</small>}
                                </div>
                                
                            </div> */}
                           

                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label">Photo1</label>
                                <div className="col-sm-8">
                                    <input type="file" required name="photo" value={event.photo1} onChange={handleFileInput1} className="form-control-file" />                                    
                                </div>                                
                            </div>
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label">Photo2</label>
                                <div className="col-sm-8">
                                    <input type="file" required name="photo" value={event.photo2} onChange={handleFileInput2} className="form-control-file" />                                    
                                </div>                                
                            </div>
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label">Photo3</label>
                                <div className="col-sm-8">
                                    <input type="file" required name="photo" value={event.photo3} onChange={handleFileInput3} className="form-control-file" />                                    
                                </div>                                
                            </div>
                            
                            <button className="btn btn-primary float-right">Add event</button>
                            </form>
                        </div>
                    </div>
              
    )
}

export default AddProduct;
