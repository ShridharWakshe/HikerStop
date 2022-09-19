import {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";

const useForm = (validateInfo,props) => {
    const [values, setValues] = useState ({
        cname : '',
        username : '',
        password : '',
        password1 : '',
        mob_no : '',
        email_id : '',
        age : '',
        gender : '',
        address : '',
        city : '',
        event_fk:'1'
    });

    console.log(values)
    const history = useHistory();
    const [errors, setErrors] = useState({});
    const [isSubmiting, setIsSubmiting] = useState(false)

    const handleChange = e => { //it will assign value inserted in perticular box to perticular name of that box
        const {name, value}=e.target;  //setting target
        setValues({
            ...values,  //it will allow us to add more states without throwing error
            [name]:value
        });
        console.log(values.gender);
    }; 

 

    const handleSubmit = e => { //kept values as it is in input box
        e.preventDefault();
       
        setErrors(validateInfo(values));
        setIsSubmiting(true);
        // fetch("http://localhost:8081/customer",{
        //     method:"POST",
        //     headers:{"Content-Type":"application/json"},
        //     body:JSON.stringify(values)
        // }).then(()=>{
        //     alert("Register Succesfully...")
        //     history.push("/login");
        //     console.log("Register Succesfully...")
        // })

        var axios = require('axios');
        var data = JSON.stringify(values);

        var config = {
        method: 'post',
        url: 'http://localhost:8081/customer',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert(response);
        })
        .catch(function (error) {
        console.log(error);
        });

        

    };
    return {handleChange, values, handleSubmit, errors};
    
};

export default useForm