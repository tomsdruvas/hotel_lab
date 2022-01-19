const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router')
const cors = require('cors');

app.use(express.json())

app.use(cors())

MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology: true})
.then((client) => {
    const db = client.db('hotel_bookings')
    const bookingsCollection = db.collection('bookings')
    const bookingsRouter = createRouter(bookingsCollection)
    app.use('/api/bookings', bookingsRouter)
})
.catch(console.error)



app.listen(5000, () => {
    console.log("App running on 5000")
})