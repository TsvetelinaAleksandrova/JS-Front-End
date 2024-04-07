
function solve() {
    const baseUrl = 'http://localhost:3030/jsonstore/bus/schedule/';

    let infoElement = document.querySelector('.info');
    let departButton = document.getElementById('depart');
    let arriveButton = document.getElementById('arrive');

    let stopId = 'depot';
    let nextStop = '';

    function depart() {
        fetch(baseUrl + stopId)
            .then(res => res.json())
            .then(data => {
                infoElement.textContent = `Next stop ${data.name}`
                nextStop = data.name
                stopId = data.next
                departButton.disabled = true
                arriveButton.disabled = false
            })
            .catch((err) => {
                infoElement.textContent = "Error"
                departButton.disabled = true
                arriveButton.disabled = true
            })
    }

    async function arrive() {
        infoElement.textContent = `Arriving at ${nextStop}`
        departButton.disabled = false
        arriveButton.disabled = true
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
