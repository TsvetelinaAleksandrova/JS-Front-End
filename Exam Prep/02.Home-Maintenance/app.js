window.addEventListener("load", solve);

function solve() {
    const placeInputElement = document.getElementById('place');
    const actionInputElement = document.getElementById('action');
    const personInputElement = document.getElementById('person');
    const addButtonInputElement = document.getElementById('add-btn');
    const taskListElement = document.getElementById('task-list');
    const doneListElement = document.getElementById('done-list');

    addButtonInputElement.addEventListener('click', () => {
        // Get input info
        const place = placeInputElement.value 
        const action = actionInputElement.value 
        const person = personInputElement.value

        // Create task element
        const taskLiElement = createTaskElement(place, action, person);

        // Add tp task list
        taskListElement.appendChild(taskLiElement);

        // Clear input fields
        clearInputs();


    })

    function createTaskElement(place, action, person) {
        const editButtonElement = document.createElement('button');
        editButtonElement.classList.add('edit');
        editButtonElement.textContent = 'Edit';

        const doneButtonElement = document.createElement('button');
        doneButtonElement.classList.add('done');
        doneButtonElement.textContent = 'Done';

        const buttonsDivElement = document.createElement('div');
        buttonsDivElement.classList.add('buttons');
        buttonsDivElement.appendChild(editButtonElement);
        buttonsDivElement.appendChild(doneButtonElement);

        const placeElement = document.createElement('p');
        placeElement.textContent = `Place ${place}`;
        const actionElement = document.createElement('p');
        actionElement.textContent = `Action ${action}`;
        const personElement = document.createElement('p');
        personElement.textContent = `Person ${person}}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(placeElement);
        articleElement.appendChild(actionElement);
        articleElement.appendChild(personElement);

        const taskLiElement = document.createElement('li');
        taskLiElement.classList.add('clean-task');
        taskLiElement.appendChild(articleElement);
        taskLiElement.appendChild(buttonsDivElement);

        // Event listeners
        editButtonElement.addEventListener('click', () => {
            // sent to inputs
            placeInputElement.value = place;
            actionInputElement.value = action;
            personInputElement.value = person;

            // remove from tasks
            taskLiElement.remove();
        });

        doneButtonElement.addEventListener('click', () => {
            // remove buttons
             buttonsDivElement.remove();

            // add delete button
            const deleteButtonElement = document.createElement('button');
            deleteButtonElement.classList.add('delete');
            deleteButtonElement.textContent = 'Delete';

            taskLiElement.appendChild(deleteButtonElement);

            // add to done list
            doneListElement.appendChild(taskLiElement);

            deleteButtonElement.addEventListener('click', () => {
                // delete task
                taskLiElement.remove();
            })
        })

        return taskLiElement;
    }

    function clearInputs() {
        placeInputElement.value = '';
        actionInputElement.value = '';
        personInputElement.value = '';
    }
}

