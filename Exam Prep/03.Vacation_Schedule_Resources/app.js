const baseUrl = 'http://localhost:3030/jsonstore/tasks';

const loadButtonElement = document.getElementById('load-vacations');
const addButtonElement = document.getElementById('add-vacation');
const editButtonElement = document.getElementById('edit-vacation');
const vacationListElement = document.getElementById('list');
const nameInputELement = document.getElementById('name');
const numDaysInputElement = document.getElementById('num-days');
const fromDateInputElement = document.getElementById('from-date');
const formElement = document.getElementById('form');

const loadVacations = async () => {
    // Fetch all vacations
    const response = await fetch(baseUrl);
    const data = await response.json();

    // clear vacation list element
    vacationListElement.innerHTML = '';

    // create vacation element for each
    for (const vacation of Object.values(data)) {
        const changeButtonElement = document.createElement('button');
        changeButtonElement.classList.add('change-btn');
        changeButtonElement.textContent = 'Change';

        const doneButtonElement = document.createElement('button');
        doneButtonElement.classList.add('done-btn');
        doneButtonElement.textContent = 'Done';

        const nameH2Element = document.createElement('h2');
        nameH2Element.textContent = vacation.name;

        const dateH3Element = document.createElement('h3');
        dateH3Element.textContent = vacation.date;

        const daysH3Element = document.createElement('h3');
        daysH3Element.textContent = vacation.days;

        const vacationDivElement = document.createElement('div');
        vacationDivElement.classList.add('container');
        vacationDivElement.appendChild(nameH2Element);
        vacationDivElement.appendChild(dateH3Element);
        vacationDivElement.appendChild(daysH3Element);
        vacationDivElement.appendChild(changeButtonElement);
        vacationDivElement.appendChild(doneButtonElement);

        // Attach vacation to dom
        vacationListElement.appendChild(vacationDivElement);

        // Attach on change
        changeButtonElement.addEventListener('click', () => {
            // save current vacation id
            formElement.setAttribute('data-id', vacation._id);

            //  populate input
            nameInputELement.value = vacation.name;
            numDaysInputElement.value = vacation.days;
            fromDateInputElement.value = vacation.date;

            // activate edit button
            editButtonElement.removeAttribute('disabled');

            // deactivate add button
            addButtonElement.setAttribute('disabled', 'disabled');

            // remove from list
            vacationDivElement.remove();
        })

        // Attach on done button
        doneButtonElement.addEventListener('click', async () => {
            // delete http request
            await fetch(`${baseUrl}/${vacation._id}`, {
                method: 'DELETE'
            });

            // remove from list
            vacationDivElement.remove();
        })
    }
}

loadButtonElement.addEventListener('click', loadVacations);

editButtonElement.addEventListener('click', async () => {
    // get data from inputs
    const { name, date, days } = getInputData();

    // get vacation id
    const vacationId = formElement.getAttribute('data-id');

    // make a put request
    const response = await fetch(`${baseUrl}/${vacationId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            _id: vacationId,
            name,
            days,
            date,
        })
    })
    if(!response.ok) {
        return;
    }

    // deactivate edit button
    editButtonElement.setAttribute('disabled', 'disabled');

    // activate add button
    addButtonElement.removeAttribute('disabled');

    // clear current id
    formElement.removeAttribute('data-id');

    // clear inputs fields
    clearInputData();

    // load vacations
    loadVacations();
})

addButtonElement.addEventListener('click', async () => {
    // get input data
    const newVacation = getInputData();

    // create post request
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newVacation),
    });

    if (!response.ok) {
        return;
    }

    // clear input fields
    clearInputData();

    // load all 
    await loadVacations();
})

function getInputData() {
    const name = nameInputELement.value;
    const date = fromDateInputElement.value;
    const days = numDaysInputElement.value;

    return { name, date, days };
}

function clearInputData() {
    nameInputELement.value = '';
    fromDateInputElement.value = '';
    numDaysInputElement.value = '';
}