export default function validateInfo(values){
    let errors={};

    if(!values.name) 
    {
        errors.name='Please enter name';
    }

    if(!values.username.trim()) //trim remove white spaces..
    {
        errors.username='Please enter username';
    }else if (!/^[A-Za-z]+/.test(values.username.trim()))
    {
        errors.username='Please enter valid username';
    }


    if(!values.password.trim()) //trim remove white spaces..
    {
        errors.password='Please enter password';
    }else if (values.password.length<8)
    {
        errors.password='Password must be more than 8 letters';
    }


    if(!values.password1) 
    {
        errors.password1='Please enter password';
    }else if (values.password1!==values.password)
    {
        errors.password1='Password do not match';
    }

    if(!values.mobileno) 
    {
        errors.mobileno='Please enter mobile no';
    }

    if(!values.email) 
    {
        errors.email='Please enter email';
    }else if (!/\S+@\S+\.\S+/.test(values.email))
    {
        errors.email='Please enter valid email';
    }

    if(!values.age) 
    {
        errors.age='Please enter age';
    }

    if(!values.address) 
    {
        errors.address='Please enter address';
    }

    return errors;
}