const getReservations = () => {
    return fetch('http://localhost:3001/api/v1/reservations')
    .then(response => {
        if(!response.ok) {
            throw new Error("Failed to fetch reservations");
        }
        return response.json();
    })
}

export const postRes = (dataIn) => {
    fetch('http://localhost:3001/api/v1/reservations', {
        method: 'POST',
        body: JSON.stringify(dataIn),
        headers: {"Content-Type": "application/json"}
    }).then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error(error));
};

export default getReservations;