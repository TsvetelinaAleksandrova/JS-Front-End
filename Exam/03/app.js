const baseUrl = 'http://localhost:3030/jsonstore/games';

const loadButtonElement = document.getElementById('load-games');
const addButtonElement = document.getElementById('add-game');
const editButtonElement = document.getElementById('edit-game');
const gamesListElement = document.getElementById('games-list');
const nameInputElement = document.getElementById('g-name');
const typeInputElement = document.getElementById('type');
const playersInputElement = document.getElementById('players');
const formElement = document.getElementById('form');

const loadGames = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();

    gamesListElement.innerHTML = '';

    for (const game of Object.values(data)) {
        const changeButtonElement = document.createElement('button');
        changeButtonElement.classList.add('change-btn');
        changeButtonElement.textContent = 'Change';

        const deleteButtonElement = document.createElement('button');
        deleteButtonElement.classList.add('delete-btn');
        deleteButtonElement.textContent = 'Delete';

        const buttonsDivContainer = document.createElement('div');
        buttonsDivContainer.classList.add = 'buttons-container';
        buttonsDivContainer.appendChild(changeButtonElement);
        buttonsDivContainer.appendChild(deleteButtonElement);

        const namePElement = document.createElement('p');
        namePElement.textContent = game.name;

        const playersPElement = document.createElement('p');
        playersPElement.textContent = game.players;

        const typePElement = document.createElement('p');
        typePElement.textContent = game.type;

        const contentDivElement = document.createElement('div');
        contentDivElement.classList.add('content');
        contentDivElement.appendChild(namePElement);
        contentDivElement.appendChild(playersPElement);
        contentDivElement.appendChild(typePElement);

        const gameDivElement = document.createElement('div');
        gameDivElement.classList.add('board-game');
        gameDivElement.appendChild(contentDivElement);
        gameDivElement.appendChild(buttonsDivContainer);

        gamesListElement.appendChild(gameDivElement);

        changeButtonElement.addEventListener('click', () => {
            formElement.setAttribute('data-id', game._id);

            nameInputElement.value = game.name;
            playersInputElement.value = game.players;
            typeInputElement.value = game.type;

            editButtonElement.removeAttribute('disabled');
            addButtonElement.setAttribute('disabled', 'disabled');

            gameDivElement.remove();
        })

        deleteButtonElement.addEventListener('click', async () => {
            await fetch(`${baseUrl}/${game._id}`, {
                method: 'DELETE'
            })
            gameDivElement.remove();
        })
    }
}

loadButtonElement.addEventListener('click', loadGames);

editButtonElement.addEventListener('click', async () => {
    const { name, players, type } = getInputData();

    const gameId = formElement.getAttribute('data-id');

    const response = await fetch(`${baseUrl}/${gameId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            _id: gameId,
            name,
            players,
            type,
        })
    })
    if(!response.ok) {
        return;
    }

    editButtonElement.removeAttribute('disabled');

    addButtonElement.setAttribute('disabled', 'disabled');

    formElement.removeAttribute('data-id');

    clearInputData();
    loadGames()
})

addButtonElement.addEventListener('click', async() => {
    const newGame = getInputData();

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newGame),
    });

    if (!response.ok) {
        return;
    }

    clearInputData();

    await loadGames();
})

function getInputData() {
    const name = nameInputElement.value;
    const players = playersInputElement.value;
    const type = typeInputElement.value;

    return { name, players, type };
}

function clearInputData() {
    nameInputElement.value = '';
    playersInputElement.value = '';
    typeInputElement.value = '';
}