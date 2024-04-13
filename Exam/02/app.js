window.addEventListener("load", solve);

function solve() {
  const addButtonElement = document.getElementById('add-btn');
  const nameInputElement = document.getElementById('name');
  const phoneInputElement = document.getElementById('phone');
  const categoryInputElement = document.getElementById('category');
  const checkListElement = document.getElementById('check-list');
  const contactsListElement = document.getElementById('contact-list');



  addButtonElement.addEventListener('click', () => {
    const name = nameInputElement.value;
    const phone = phoneInputElement.value;
    const category = categoryInputElement.value;

    if (!name || !phone || !category) {
      return;
    }

    const checkLiElement = createLiElement(name, phone, category);
    checkListElement.appendChild(checkLiElement);

    nameInputElement.value = '';
    phoneInputElement.value = '';
    categoryInputElement.value = '';

    const editButtonElement = document.querySelector('.edit-btn');
    const saveButtonElement = document.querySelector('.save-btn');

    editButtonElement.addEventListener('click', () => {
      nameInputElement.value = name;
      phoneInputElement.value = phone;
      categoryInputElement.value = category;

      checkLiElement.remove();
    })

    saveButtonElement.addEventListener('click', () => {
      const checkButtonsElement = document.querySelector('.buttons');
      checkButtonsElement.remove();

      const deleteButtonElement = createDeleteButtonElement();
      checkLiElement.appendChild(deleteButtonElement);
      contactsListElement.appendChild(checkLiElement);

      deleteButtonElement.addEventListener('click', () => {
        checkLiElement.remove();
      })
    })
  })

  function createLiElement(name, phone, category) {
    const pNameElement = document.createElement('p');
    pNameElement.textContent = `name:${name}`;

    const pPhoneElement = document.createElement('p');
    pPhoneElement.textContent = `phone:${phone}`;

    const pCategoryElement = document.createElement('p');
    pCategoryElement.textContent = `category:${category}`;

    const articleElement = document.createElement('article');
    articleElement.appendChild(pNameElement);
    articleElement.appendChild(pPhoneElement);
    articleElement.appendChild(pCategoryElement);

    const editButtonElement = document.createElement('button');
    editButtonElement.classList.add('edit-btn');
    
    const saveButtonELement = document.createElement('button');
    saveButtonELement.classList.add('save-btn');

    const divElement = document.createElement('div');
    divElement.classList.add('buttons');
    divElement.appendChild(editButtonElement);
    divElement.appendChild(saveButtonELement);

    const liCheckElement = document.createElement('li');
    liCheckElement.appendChild(articleElement);
    liCheckElement.appendChild(divElement);

    return liCheckElement;
  }

  function createDeleteButtonElement() {
    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.classList.add('del-btn');

    return deleteButtonElement;
  }
}
  