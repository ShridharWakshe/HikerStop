import axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import {useHistory,useParams,useLocation} from "react-router-dom";
import Event from "./Event";
import queryString  from "query-string";
import TopSlider from "./TopSlider";
import Footer from "./Footer";

function AllProduct(){
    const [events,setEvents]=useState([])
    const [totalPage,setTotalPage]=useState(0)
    const state=useSelector((state)=>state);
    const location=useLocation()
    const [item,setItem]=useState({})
    const [qty,setQty]=useState(1)
    const dispatch=useDispatch()
    const history=useHistory()

    const [showDialog,setShowDialog]=useState("modal fade")
    const [display,setDisplay]=useState("none")
    
    const showModal=(event)=>{
        setShowDialog("modal fade show")
        setDisplay("block")
        setItem(event)
    }

    const checkItem =(eventid)=>{
        return state.cart.findIndex(x=>x.eventid===eventid)<0
    }

    const closeDialog=()=>{        
        setShowDialog("modal fade")
        setDisplay("none")
    }

    const loadDataFromServer=(page=0,pagesize=8)=>{
        axios.get("http://localhost:9090/api/events/paginated?page="+page+"&pagesize="+pagesize)
            .then(resp=>{
                // console.log(resp.data.total)
                // setEvents(resp.data.eventlist)
                // setTotalPage(Math.ceil(resp.data.total/pagesize))
                console.log(resp.data.data.total)
                setEvents(resp.data.data.eventlist)
                setTotalPage(Math.ceil(resp.data.data.total/pagesize))
                console.log(events)
            })
    }

    useEffect(()=>{
        console.log("I am here cat",location.search)
        let eventcat=queryString.parse(location.search)
        console.log(eventcat.cat)
        if(eventcat.cat!==undefined){
            axios.get("http://localhost:9090/api/events?cat="+eventcat.cat)
            .then(resp=>{
                console.log(resp.data)
                setEvents(resp.data.data)
                console.log(events)
            })
        }
        else {
            loadDataFromServer()
        }
    },[location])
    const addToCart=item=>{  
        if(sessionStorage.getItem("userid")==null){
            alert("Please login first to buy product")
            history.push("/clogin")
        }
        else if(sessionStorage.getItem("role")!=="customer"){
            alert("Only customer can buy product")
        }      
        else{            
            if(checkItem(item.eventid))
            {     
                showModal() 
                setDisplay("none")
                setShowDialog("modal fade") 
               
                    item.qty=qty  
                    dispatch({type:'AddItem',payload:item})
                    alert("Item added to cart successfully")
               
            }
            else{   
                alert("Item already in cart")
            }
        }
    }



    const handlePageClick=({selected:selectedPage})=>{
        loadDataFromServer(selectedPage)
    }
    
    return (
        <>   
        <div className="container-fluid p-2">
        <TopSlider/>
        </div>              
        <div className="container-fluid" style={{width:"95%"}}>
            <div className=" bg-transparent text-white">
                <div className="card-body">
                <ReactPaginate 
                    previousLabel={"🢀"}
                    nextLabel={"🢂"}
                    containerClassName={"pagination"}
                    pageCount={totalPage}
                    onPageChange={handlePageClick}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"pagination__link--active"} />
                    <div className="row">
                    {events?.map(x=>(
                        <Event key={x.eventid} x={x} showModal={showModal} />
                    ))}
                    </div>
                    
                </div>
            </div> 
            {display=="block"?( 
            <div className={showDialog} style={{zIndex:"1000",display:display}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5>Book This Event</h5>
                            <button onClick={closeDialog} className="close">&times;</button>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex">
                                <img src={"http://localhost:9090/"+item.photo} style={{width:"350px"}}  alt=""/>
                                
                                <div className="ml-3">
                                    <h4 className="p-2 text-warning">{item.eventname}</h4>
                                    {/* <h5 className="px-2">photo: {item.photo}</h5> */}
                                    <h5 className="px-2">Category: {item.eventcat}</h5>
                                    <h5 className="px-2">Guide: {item.guideName}</h5>
                                    <h5 className="px-2">short description :</h5>
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rerum totam impedit non laborum temporibus nemo! Ratione non, eligendi odio consequatur, culpa cum, suscipit praesentium illo voluptate aspernatur minima odit orem ipsum dolor sit amet consectetur adipisicing elit.g?</p>
                                    <h5 className="px-2">Price: &#8377; {item.price}</h5>
                                    <label> Enter Number Of Person</label><br />
                                  
                                    <input type="number" 
                                    value={qty} onChange={(e) => {
                                        const reg = /^$|^[1-9]+$/;
                                        const newValue = e.target.value;
                                        if (reg.test(newValue)) {
                                         setQty(newValue);
                                        }
                                      }
                                    } required/>
                                    <span> <strong>Tatal bill : {item.price * qty}</strong></span>

                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button onClick={e=>addToCart(item)} className="btn btn-warning btn-sm">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>) : ""}
        </div>
                              
        </>
    )
}

export default AllProduct;