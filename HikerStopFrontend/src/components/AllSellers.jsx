import axios from "axios";
import { useEffect, useState } from "react";

function AllSellers(){
    const [sellers,setSellers]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:9090/api/sellers")
        .then(resp=>{
            //console.log(resp.data.data)
            setSellers(resp.data.data)
            console.log(sellers)
        })
    },[])

    const deleteSeller=(id)=>{
        let response=window.confirm('Are you sure to delete this seller ?');
        if(response){
           console.log(id);
           axios.delete("http://localhost:9090/api/sellers/"+id)
           .then(resp=>{
                axios.get("http://localhost:9090/api/sellers")
                .then(resp=>{
                    //console.log(resp.data.data)
                    setSellers(resp.data.data)            
                })
           })
        }
    }
    
    return (
        <div className="bg-transparent  text-black" style={{  backgroundImage: `url("http://www.thewowstyle.com/wp-content/uploads/2015/02/the-river-in-valley-of-beautiful-mountains-hd-wallpaper-75015.jpg")`}}> 
        
        <div className="col-sm-6 mx-auto " style={{ height:"563px" }}>

            <h4 className="p-2 text-center">All Guide</h4>

            <table className="table table-bordered table-striped table-dark table-hover" style={{ marginLeft:"-225px" }}>
                <thead className="table-dark">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Phone</th>
                        <th>User Id</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {sellers.map(x=>(
                    <tr key={x.id}>
                        <td>{x.id}</td>
                        <td>{x.name}</td>
                        <td>{x.city}</td>
                        <td>{x.phone}</td>
                        <td>{x.userid}</td>
                        <td>{x.pwd}</td>
                        <td><button onClick={(e)=>deleteSeller(x.id)} className="btn btn-danger btn-sm">Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default AllSellers;