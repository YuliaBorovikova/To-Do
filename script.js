const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');

btn.addEventListener('click', function() {
    const item = document.createElement('li');
    item.innerText = input.value;
    if (input.value.length === 0) {
        return false;
        }
    list.appendChild(item);
    input.value = '';
    item.classList.add('item');


item.addEventListener('click', function() {
    item.classList.add('itemTwo');
})
item.addEventListener('dblclick', function() {
    list.removeChild(item);
})
})

const inputTwo = document.querySelector('.inputTwo');
const btnTwo = document.querySelector('.btnTwo');
const listTwo = document.querySelector('.listTwo');

btnTwo.addEventListener('click', function() {
    const itemTwo = document.createElement('li');
    itemTwo.innerText = inputTwo.value;
    if (inputTwo.value.length === 0) {
        return false;
        }
    listTwo.appendChild(itemTwo);
    inputTwo.value = '';
    itemTwo.classList.add('item');


itemTwo.addEventListener('click', function() {
    itemTwo.classList.add('itemTwo');
})
itemTwo.addEventListener('dblclick', function() {
    listTwo.removeChild(itemTwo);
})
})

const inputThree = document.querySelector('.inputThree');
const btnThree = document.querySelector('.btnThree');
const listThree = document.querySelector('.listThree');

btnThree.addEventListener('click', function() {
    const itemThree = document.createElement('li');
    itemThree.innerText = inputThree.value;
    if (inputThree.value.length === 0) {
        return false;
        }
    listThree.appendChild(itemThree);
    inputThree.value = '';
    itemThree.classList.add('item');


itemThree.addEventListener('click', function() {
    itemThree.classList.add('itemTwo');
})
itemThree.addEventListener('dblclick', function() {
    listThree.removeChild(itemThree);
})
})

const inputFour = document.querySelector('.inputFour');
const btnFour = document.querySelector('.btnFour');
const listFour = document.querySelector('.listFour');

btnFour.addEventListener('click', function() {
    const itemFour = document.createElement('li');
    itemFour.innerText = inputFour.value;
    if (inputFour.value.length === 0) {
        return false;
        }
    listFour.appendChild(itemFour);
    inputFour.value = '';
    itemFour.classList.add('item');


itemFour.addEventListener('click', function() {
    itemFour.classList.add('itemTwo');
})
itemFour.addEventListener('dblclick', function() {
    listFour.removeChild(itemFour);
})
})

const inputFive = document.querySelector('.inputFive');
const btnFive = document.querySelector('.btnFive');
const listFive = document.querySelector('.listFive');

btnFive.addEventListener('click', function() {
    const itemFive = document.createElement('li');
    itemFive.innerText = inputFive.value;
    if (inputFive.value.length === 0) {
        return false;
        }
    listFive.appendChild(itemFive);
    inputFive.value = '';
    itemFive.classList.add('item');


itemFive.addEventListener('click', function() {
    itemFive.classList.add('itemTwo');
})
itemFive.addEventListener('dblclick', function() {
    listFive.removeChild(itemFive);
})
})

const inputSix = document.querySelector('.inputSix');
const btnSix = document.querySelector('.btnSix');
const listSix = document.querySelector('.listSix');

btnSix.addEventListener('click', function() {
    const itemSix = document.createElement('li');
    itemSix.innerText = inputSix.value;
    if (inputSix.value.length === 0) {
        return false;
        }
    listSix.appendChild(itemSix);
    inputSix.value = '';
    itemSix.classList.add('item');


itemSix.addEventListener('click', function() {
    itemSix.classList.add('itemTwo');
})
itemSix.addEventListener('dblclick', function() {
    listSix.removeChild(itemSix);
})
})

const inputSeven = document.querySelector('.inputSeven');
const btnSeven = document.querySelector('.btnSeven');
const listSeven = document.querySelector('.listSeven');

btnSeven.addEventListener('click', function() {
    const itemSeven = document.createElement('li');
    itemSeven.innerText = inputSeven.value;
    if (inputSeven.value.length === 0) {
        return false;
        }
    listSeven.appendChild(itemSeven);
    inputSeven.value = '';
    itemSeven.classList.add('item');


itemSeven.addEventListener('click', function() {
    itemSeven.classList.add('itemTwo');
})
itemSeven.addEventListener('dblclick', function() {
    listSeven.removeChild(itemSeven);
})
})
