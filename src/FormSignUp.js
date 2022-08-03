import React from 'react';
import useForm from './UseForm';
import validationinfo from './validateInfo'
import './Form.css'


const FormSignUp = ({submitForm}) => {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validationinfo);

  return (
    <div className="form-content-right">
        <form className="form" onSubmit={handleSubmit}>
            <h1>Get started with us today! Create your account by filling out the information below.</h1>
            <div className="form-inputs">
                <label htmlFor="username" className="form-label">username</label>
                <input 
                    id="username" 
                    type="text" 
                    name="username" 
                    placeholder="Enter your username" 
                    value={values.username}
                    onChange={ handleChange }></input>

                    {errors.username && <p>{errors.username}</p>}
            </div>
            
            <div className="form-inputs">
                <label htmlFor="email" className="form-label">email</label>
                <input 
                    id="email" 
                    type="email" 
                    name="email" 
                    placeholder="Enter your email" 
                    value={values.email}
                    onChange={ handleChange }></input>

                    {errors.email && <p>{errors.email}</p>}
            </div>
            
            <div className="form-inputs">
                <label htmlFor="password" className="form-label">password</label>
                <input 
                    id="password" 
                    type="password" 
                    name="password" 
                    placeholder="Enter your password" 
                    value={values.password}
                    onChange={ handleChange }></input>

                    {errors.password && <p>{errors.password}</p>}
            </div>
            
            <div className="form-inputs">
                <label htmlFor="password2" className="form-label">confirm password</label>
                <input 
                    id="password2" 
                    type="password" 
                    name="password2" 
                    placeholder="Confirm your password" 
                    value={values.password2}
                    onChange={ handleChange }></input>

                    {errors.password2 && <p>{errors.password2}</p>}
            </div>
            
            <button className="form-input-btn" type="submit">Sign up</button>
            <span className="form-input-login">Already have an account? Login <a href="#">here</a></span>
        </form>
    </div>
  )
}

export default FormSignUp