import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import useEvent from "../useEvent";

const Events = ({event}) => {
  const [handleSubmit, handleBook] = useEvent();
    return(
        <div>
            <Navbar/>
            <div>
                <table>
                    <th>Sr. no.</th><th>Event</th><th>Date</th><th>Availability</th><th>Price</th>
                    <tr>
                        <td>
                            {event.eventid}
                        </td>
                        <td>
                            {event.eventname}
                        </td>
                        <td>
                            {event.eventdate}
                        </td>
                        <td>
                            {event.availabilty}
                        </td>
                        <td>
                            {event.price}
                        </td>
                        <td>
                            <button onClick={handleSubmit}>View Details</button>
                        </td>
                        <td>
                            <button onClick={handleBook}>Book Now</button>
                        </td>
                    </tr>
                </table>
            </div>
            <Footer/>
        </div>
    )
}

export default Events