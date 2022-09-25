import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import eventvalidation from "./eventvalidation";

function EditProduct(){
    console.log("Edit Event page")
    const sellerid=sessionStorage.getItem("id")
    const {prodid}=useParams()
    const [product,setProduct]=useState({
        "eventid":prodid,
        "eventname":"",
        "eventcat":"",
        "photo":"",
        "price":"",
        "location":"",
        "guideId":sellerid
    })
    
    
    const [errors,setErrors]=useState({})
    const [submitted,setSubmitted]=useState(false)
    const history=useHistory()

    const handleInput=e=>{
        setProduct({...product,[e.target.name]:e.target.value})
    }

    const handleSubmit=e=>{
        e.preventDefault()
        setErrors(eventvalidation(product))    
        setSubmitted(true)
    }
    
    useEffect(()=>{        
        console.log(errors)

        axios.get("http://localhost:9090/api/events/"+prodid)
        .then(resp=>{
            console.log(resp.data.data)
            setProduct(resp.data.data)
        })
        
        if(Object.keys(errors).length===0 && submitted){            
            console.log(product)
            axios.put("http://localhost:9090/api/events/"+prodid,product)
            .then(resp=>{
                let result=resp.data.data;
                console.log(result) 
                alert("Product saved successfully")               
                history.push("/myproducts")
            })
            .catch(error=>{
                console.log("Error",error);
                alert("Error saving product")
            })            
        }
    },[errors])
    return (
        <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3">
                            <img width="300" src={"http://localhost:9090/"+product.photo1} />
                        </div>
                        <div className="col-sm-9">
                            <h4 className="text-center p-2">
                                Edit Event Form (Product ID : )
                            </h4>
                            <form onSubmit={handleSubmit}>
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label">Event Name</label>
                                <div className="col-sm-8">
                                    <input type="text" name="eventname" value={product.eventname} onChange={handleInput} className="form-control" />
                                    {errors.eventname && <small className="text-danger float-right">{errors.eventname}</small>}
                                </div>
                                
                            </div>                            
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label">Category</label>
                                <div className="col-sm-8">
                                    <select name="pcat" value={product.cat} onChange={handleInput} className="form-control">
                                        <option value="">Select Category</option>
                                        <option>Himalayan Trek</option>     
                                        <option>Jungle Safari</option>     
                                        <option>Local Treks</option>     
                                        <option>Biking</option>     
                                        <option>Winter Treks</option>     
                                        <option>Adventure Sports</option>     
                                    </select>   
                                    {errors.pcat && <small className="text-danger float-right">{errors.pcat}</small>}                    
                                </div>                        
                            </div>                            
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label">Price</label>
                                <div className="col-sm-8">
                                    <input type="number" name="price" value={product.price} onChange={handleInput} className="form-control" />
                                    {errors.price && <small className="text-danger float-right">{errors.price}</small>}
                                </div>                                
                            </div>
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label">Location</label>
                                <div className="col-sm-8">
                                    <input type="text" name="brand" value={product.location} onChange={handleInput} className="form-control" />
                                    {errors.location && <small className="text-danger float-right">{errors.location}</small>}
                                </div>                                
                            </div>                           
                            
                            <button className="btn btn-primary float-right">Update Product</button>
                            </form>
                        </div>
                    </div>
                </div>
    )
}

export default EditProduct;
