import React, {useState, useEffect} from 'react'
import BookingForm from '../components/BookingForm'
import BookingsList from '../components/BookingsList'
import { getData } from '../services/BookingService'

const BookingsContainer = () => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        getData().then((result) => setData(result))
    }, [])


    const addBooking = (booking) => {
        const temp = data.map(b => b)
        temp.push(booking)
        setData(temp)
    }

   
    

    return (
        <div className='bookings-container'>
            This is the bookings container
            <BookingsList bookings={data} />
            <BookingForm addBooking={addBooking}/>
        </div>
    )
}

export default BookingsContainer
