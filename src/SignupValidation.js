function Validation(values){
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.name === ""){
        error.name = "name shouldn't be empty"
    }
    else{
        error.name = ""
    }

    if(values.email === ""){
        error.email = "email shouldn't be empty"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "email didn't match"
    }else{
        error.email = ""
    }

    if(values.password === ""){
        error.password = "password shouldn't be empty"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "password didn't match"
    }else{
        error.password = ""
    }
    return error;
}

export default Validation;