import React from 'react'

const BookingItem = ({booking, deleteItem}) => {
    return (
        <div className='booking-item'>
            <h4>Name: {booking.name}</h4>
            <h4>Email: {booking.email}</h4>
            <h4>Checked in: {booking.checked_in ? "Yes" : "No"}</h4>
            <button value="Delete" onClick={() => {deleteItem(booking._id)}} ></button>

        </div>
    )
}

export default BookingItem
