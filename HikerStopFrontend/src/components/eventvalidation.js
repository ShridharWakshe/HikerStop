const eventvalidation=(values)=>{
    let errors={}
    if(!values.eventname){
        errors.eventname="Event Name is required"
    }
    if(!values.price){
        errors.price="Price is required"
    } 
    if(!values.eventcat){
        errors.eventcat="Category is required"
    }   
    return errors;
}

export default eventvalidation;