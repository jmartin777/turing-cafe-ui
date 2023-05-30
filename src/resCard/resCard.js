import React from "react";
import './resCard.css';

const ResCard = ({name, date, time, number, id, deleteRes }) => {
    return(
        <div className="resCard">
            <h3>{name}</h3>
            <p>{date}</p>
            <p>{time}</p>
            <p>{number}</p>
            <button className="deleteButton" onClick={() => deleteRes(id)}>Cancel</button>
        </div>
    )
}

export default ResCard;
