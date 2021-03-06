import React, {useState, useEffect} from 'react'
import BookingForm from '../components/BookingForm'
import BookingsList from '../components/BookingsList'
import { deleteBooking as apiDeleteBooking, getData } from '../services/BookingService'

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

    const deleteBooking = (id) => {
        apiDeleteBooking(id).then(() => {
          const temp = data.map(s =>s);
          const indexToDel = temp.map(s => s._id).indexOf(id);
          console.log(indexToDel);
          temp.splice(indexToDel, 1);
          setData(temp);
        })
      }

   
    

    return (
        <div className='bookings-container'>
            This is the bookings container
            <BookingsList bookings={data} />
            <BookingForm addBooking={addBooking} deleteBooking={deleteBooking}/>
        </div>
    )
}

export default BookingsContainer
