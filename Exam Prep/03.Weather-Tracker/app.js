const baseUrl = 'http://localhost:3030/jsonstore/tasks';

const loadButtonElement = document.getElementById('load-history');
const addButtonElement = document.getElementById('add-weather');
const editButtonElement = document.getElementById('edit-weather');
const locationInputElement = document.getElementById('location');
const temperatureInputElement = document.getElementById('temperature');
const dateInputElement = document.getElementById('date');
const historyListElement = document.getElementById('list');
const formElement = document.getElementById('form');

const loadHistory = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();

    historyListElement.innerHTML = '';

    for (const weather of Object.values(data)) {
        const changeButtonElement = document.createElement('button');
        changeButtonElement.classList.add('change-btn');
        changeButtonElement.textContent = 'Change';

        const deleteButtonElement = document.createElement('button');
        deleteButtonElement.classList.add('delete-btn');
        deleteButtonElement.textContent = 'Delete';

        const buttonsDivContainer = document.createElement('div');
        buttonsDivContainer.classList.add('buttons-container');
        buttonsDivContainer.appendChild(changeButtonElement);
        buttonsDivContainer.appendChild(deleteButtonElement);

        const locationH2Element = document.createElement('h2');
        locationH2Element.textContent = weather.location;

        const temperatureH3Element = document.createElement('h3');
        temperatureH3Element.textContent = weather.temperature;

        const dateH3Element = document.createElement('h3');
        dateH3Element.textContent = weather.date;

        const weatherDivContainer = document.createElement('div');
        weatherDivContainer.classList.add('container');
        weatherDivContainer.appendChild(locationH2Element);
        weatherDivContainer.appendChild(temperatureH3Element);
        weatherDivContainer.appendChild(dateH3Element);
        weatherDivContainer.appendChild(buttonsDivContainer);

        historyListElement.appendChild(weatherDivContainer);

        changeButtonElement.addEventListener('click', () => {
            formElement.setAttribute('data-id', weather._id);

            locationInputElement.value = weather.location;
            temperatureInputElement.value = weather.temperature;
            dateInputElement.value = weather.date;

            editButtonElement.removeAttribute('disabled');
            addButtonElement.setAttribute('disabled', 'disabled');

            weatherDivContainer.remove();
        })

        deleteButtonElement.addEventListener('click', async () => {
            await fetch(`${baseUrl}/${weather._id}`, {
                method: 'DELETE'
            })
            weatherDivContainer.remove();
        })
    }
}

loadButtonElement.addEventListener('click', loadHistory);

addButtonElement.addEventListener('click', async () => {
    const newWeather = getInputData();

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newWeather),
    });

    if (!response.ok) {
        return;
    }

    clearInputData();

    await loadHistory();
})

editButtonElement.addEventListener('click', async () => {
    const { location, temperature, date } = getInputData();

    const weatherId = formElement.getAttribute('data-id');

    const response = await fetch(`${baseUrl}/${weatherId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            _id: weatherId,
            location,
            temperature,
            date,
        })
    })
    if(!response.ok) {
        return;
    }

    editButtonElement.setAttribute('disabled', 'disabled');

    addButtonElement.removeAttribute('disabled');

    formElement.removeAttribute('data-id');

    clearInputData();
    loadHistory();

})

function getInputData() {
    const location = locationInputElement.value;
    const temperature = temperatureInputElement.value;
    const date = dateInputElement.value;

    return { location, temperature, date };
}

function clearInputData() {
    locationInputElement.value = '';
    temperatureInputElement.value = '';
    dateInputElement.value = '';
}
   
