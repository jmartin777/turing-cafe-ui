import React from "react";
import './Reservations.css'

function Reservations ({reservations}){
    const reservationCards = reservations.map(reservation =>{
        return (
            <resCard
            
            name={reservation.name}
            date={reservation.date}
            time={reservation.time}
            numGuests={reservation.numGuests}
            id={reservation.id}
            key={reservation._id}
            // delete = {deleteRes}
            />
        )
    })

    return (
        <div className="reservations-container">
            {reservationCards}
        </div>
    )
}

export default Reservations;