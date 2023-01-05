const Validation = (values) => {

    let errors={};

    if (!values.fullname){
        errors.fullname= "Oops! Name is required"
    }
    if (!values.email){
        errors.email= "Oops! Email is required"
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Oops! Email is invalid"
    }
    if(!values.tel) {
        errors.tel= "Oops! Phonenumber is required"
    }
    
  return errors;
}

export default Validation
