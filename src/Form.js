import React, { useState } from 'react'
import FormSignUp from "./FormSignUp"
import FormSuccess from "./FormSuccess.js"

const Form = () => {
    const [isSubmited, setIsSubmited] = useState(false); 

    function submitForm() {
        setIsSubmited(true);
    };
  return (
    <div>
        {!isSubmited ? <FormSignUp submitForm=
        {submitForm} /> : <FormSuccess />}
    </div>
  )
}

export default Form