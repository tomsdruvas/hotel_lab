use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
    {
    name: "Jack",
    email: "yourmail@mail.com",
    checked_in: false
    },
    {
    name: "Bobby",
    email: "bobby@mail.com",
    checked_in: true
    }
]);
