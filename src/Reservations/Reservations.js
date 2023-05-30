import React from "react";
import './Reservations.css'
import ResCard from "../resCard/resCard";

function Reservations ({reservations, deleteRes}){
    const reservationCards = reservations.map(reservation =>{
        return (
            <ResCard
            
            name={reservation.name}
            date={reservation.date}
            time={reservation.time}
            number={"Number of Guests: " + reservation.number}
            id={reservation.id}
            key={reservation.id}
            deleteRes = {deleteRes}
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