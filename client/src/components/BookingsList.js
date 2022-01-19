import React from 'react'
import BookingItem from './BookingItem'

const BookingsList = ({bookings}) => {
    const bookingNodes = bookings.map((booking) => {
        return <BookingItem booking={booking} key={booking._id} />
    })

    return (
        <div className='bookings-list'>
            This is a bookings list
            {bookingNodes}
        </div>
    )
}

export default BookingsList
