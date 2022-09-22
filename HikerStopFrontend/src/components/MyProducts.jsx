import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MyEvent(){
    const guideid=sessionStorage.getItem("id");
    const [events,setEvents]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:9090/api/events?guideid="+guideid)
        .then(resp=>{
            console.log(resp.data)
            setEvents(resp.data.data)
            console.log(events)
        })
    },[])

    const deleteEvent = (eventid)=>{
        let resp=window.confirm('Are you sure to delete this Event ?');
        if(resp){
            axios.delete("http://localhost:9090/api/events/"+eventid)
            .then(resp=>{
                alert("Event deleted successfully")
                axios.get("http://localhost:9090/api/events?guideid="+guideid)
                .then(resp=>{
                    console.log(resp.data)
                    setEvents(resp.data.data)
                    console.log(events)
                })
            })            
        }
    }
    
    return (
        <div className="container">
            <div className="card shadow bg-dark text-white">
                <div className="card-body">                    
            <h4>My Events</h4>
            <table className="table table-bordered table-dark">
                <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Location</th>
                        <th>Price</th>
                        <th>Action</th>                                
                    </tr>
                </thead>
                <tbody>
                {events.map(x=>(
                    <tr key={x.eventid}>
                        <td><img width="100" src={"http://localhost:9090/"+x.photo} className="img-thumnail"  alt=""/>{x.eventname}</td>
                        <td>{x.eventcat}</td>
                        <td>{x.location}</td>
                        <td>{x.price}</td>
                        <td>
                            <Link to={"/edit/"+x.eventid} className="btn btn-primary btn-sm mr-2">Edit</Link>
                            <button onClick={()=>deleteEvent(x.eventid)} className="btn btn-danger btn-sm">Delete</button>
                        </td>                                
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        
        </div>
            </div>
    )
}

export default MyEvent;