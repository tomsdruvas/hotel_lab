import React, { useState } from 'react'
import { postBooking } from '../services/BookingService'

const BookingForm = ({addBooking}) => {
    const [formData, setFormData] = useState({})
    
    const onChange = (e) =>{
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        postBooking(formData).then((data)=>{
            addBooking(data);
        })
    } 


    return (
        <div className='booking-form'>
            <form onSubmit={onSubmit} id='bookings-form'>
                <div className='form-wrap'>
                    <label htmlFor="name">Name:</label>
                    <input required onChange={onChange} type="text" name="name" id="name" />
                </div>
                <div className='form-wrap'>
                    <label htmlFor="email">Email:</label>
                    <input required onChange={onChange} type="email" name="email" id="email" />
                </div>
                <input type="submit" value="Add booking" />

            </form>
        </div>
    )
}

export default BookingForm
