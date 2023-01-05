import React from 'react'
import './WaitListForm.css'
import useForm from './useForm'

const WaitListForm = ({submitForm}) => {
    const {handleChange, handleFormSubmit, values, errors } = useForm(submitForm);
  return (
    <div className='container'>
        <div className='app-wrapper'>
            <div>
                <h2 className='title'>Join Waitlist</h2>
                <p className='info'>Fill the form below to join</p>
            </div>
            <form className='form-wrapper'>
                <div className='name'>
                    <label className='label'>Full Name</label>
                    <input className='input' 
                    type='text' 
                    name='fullname' 
                    value={values.fullname}
                    onChange={handleChange}
                    />
                    {errors.fullname && <p className='error'>{errors.fullname}</p>}
                </div>
                <div className='email'>
                    <label className='label'>Email Address</label>
                    <input className='input' 
                    type='email' 
                    name='email' 
                    value={values.email}
                    onChange={handleChange}
                    />
                    {errors.email && <p className='error'>{errors.email}</p>}
                </div>
                <div className='phonenumber'>
                    <label className='label'>Phone Number</label>
                    <input className='input' 
                    type='tel' 
                    name='tel' 
                    value={values.tel}
                    onChange={handleChange}
                    />
                    {errors.tel && <p className='error'>{errors.tel}</p>}
                </div>
                <div className='submit' onClick={handleFormSubmit}>Join</div>
            </form>
        </div>
      
    </div>
  )
}

export default WaitListForm
