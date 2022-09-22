import { Link } from "react-router-dom";


function Event(props){
    const {x,showModal}=props
    return (
        <div className="col-sm-3" key={x.eventid}>
            <div className="card text-center text-white mb-3 bg-dark" style={{boxShadow:"0 0 3px 3px white"}}>
                <div className="card-header p-1 border-bottom border-dark">
                    <h5>{x.eventname}</h5>
                </div>
                <div className="card-body py-1">
                <img style={{width:"90%",height:"250px",marginBottom:"10px"}} src={"http://localhost:9090/"+x.photo} className="img-thumnail" alt=""/>
                <p className="float-left">Location :<br/>
                {x.location}</p>                
                <h6 className="float-right">Price: &#8377; {x.price}</h6>                           
                </div>
                <div className="card-footer p-1">
                    <button  className="btn btn-info btn-sm mr-2"><Link to= './Sandhanvalley'>view details</Link></button>
                    <button onClick={e=>showModal(x)} className="btn btn-primary btn-sm">Book</button>
                </div>
            </div>
        </div>
    )
}

export default Event;