import axios from "axios";
import { useEffect, useState } from "react";

function AllCustomers(){
    const [customers,setCustomers]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:9090/api/customers")
        .then(resp=>{
            setCustomers(resp.data.data)
            console.log(customers)
        })
    },[])
    
    return (
        <div className="bg-transparent  text-black" style={{  backgroundImage: `url("http://www.thewowstyle.com/wp-content/uploads/2015/02/the-river-in-valley-of-beautiful-mountains-hd-wallpaper-75015.jpg")`}}> 
        
        <div className="col-sm-6 mx-auto " style={{ height:"563px" }}>
            <h4 className="p-2 text-center">All Guides</h4>
            <table className="table table-bordered table-striped table-dark table-hover" style={{ marginLeft:"-225px" }}>
                <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                        <th>Gender</th>
                        <th>Phone</th>
                        <th>User Id</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                {customers.map(x=>(
                    <tr key={x.id}>
                        <td>{x.name}</td>
                        <td>{x.city}</td>
                        <td>{x.gender}</td>
                        <td>{x.phone}</td>
                        <td>{x.userid}</td>
                        <td>{x.pwd}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default AllCustomers;