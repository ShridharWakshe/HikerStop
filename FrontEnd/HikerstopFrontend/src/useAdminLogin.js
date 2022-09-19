import { useState } from "react";
import validateInfo from "./validateInfo";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const useAdminLogin= validateInfo =>{
    const [values, setValues] = useState({
        username : '',
        password : ''
    });
    const history = useHistory();
    const [errors, setErrors] = useState({});

    const [isSubmiting, setIsSubmiting] = useState(false);

    const handleChange = e =>{
        const {name,value}= e.target;

        setValues({
            ...values,
            [name]:value
        });
    };
   

    const handleSubmit1 = e =>{
        e.preventDefault();

        setErrors(validateInfo(values));
        setIsSubmiting(true);
        // fetch("http://localhost:8081/customer/login/"+values.username+"/"+values.password,{
        //     method:"GET",
        //     headers:{"Content-Type":"application/json"},
        // }).then((Response)=>{
        //     console.log(Response);
        //     if(Response.status===200){
        //          alert("Login Succesful")
        //         // toast.success('Login Succesful')
        //         history.push("/add");
        //         console.log("login success");
        //     }
        //     else{
        //         alert("Login unsuccesful")
        //         console.log("unsuccess");
        //     }
           
        // })

        var axios = require('axios');

        var config = {
        method: 'get',
        url: 'http://localhost:8081/author/adminlogin/'+values.username+"/"+values.password,
        headers: { }
        };

        axios(config)
        .then(function (response) {
            alert("Login Succesful")
            history.push("/add");
        console.log(JSON.stringify(response));
        })
        .catch(function (error) {
            alert("Login unsuccesful")
            console.log(error);
        });

    }

    return {handleChange, values, handleSubmit1, errors};


}
export default useAdminLogin