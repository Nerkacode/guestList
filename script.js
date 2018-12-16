const input = document.getElementById('input');
const output = document.getElementById('output');
const inputField = document.getElementById('inputField');
let inputArray = [];

function printing() {
    for (let i = 0; i < inputArray.length; i++) {
        output.innerHTML += '<li>' + inputArray[i] + ';</li>';
    };
};

function addToListEnd() {
    if (inputField.value !== "") {
        inputArray.push(inputField.value);
        output.innerHTML = "";
        printing();
    };
};

function addToListStart() {
    if (inputField.value !== "") {
        inputArray.unshift(inputField.value);
        output.innerHTML = "";
        printing();
    };
};

function removeFirst() {
    if (inputArray.length > 0) {
        inputArray.shift();
        output.innerHTML = "";
        printing();
    };
};

function removeLast() {
    if (inputArray.length > 0) {
        inputArray.pop();
        output.innerHTML = "";
        printing();
    };
};

function removeList() {
    if (inputArray.length > 0) {
        inputArray = [];
        output.innerHTML = inputArray;
    };
};

input.addEventListener('click', event => {
    let buttonName = event.target.name;

    if (buttonName === 'addToListEnd' || buttonName === 'addToListStart') {
        switch (buttonName) {
            case "addToListEnd":
                addToListEnd();
                break;
            case "addToListStart":
                addToListStart();
                break;
            default:
                console.log('error');
        };
    };

    if (buttonName === 'removeFirst' || buttonName === 'removeLast' || buttonName === 'removeList' || buttonName === 'reverse' || buttonName === 'Sort-a-z' || buttonName === 'Sort-z-a' || buttonName === 'Remove-from-to') {
        const removeFrom = document.getElementById('removeFrom').value;
        const removeTo = document.getElementById('removeTo').value;
        switch (buttonName) {
            case "removeFirst":
                removeFirst();
                break;
            case "removeLast":
                removeLast();
                break;
            case "removeList":
                removeList();
                break;
            case "reverse":
                inputArray.reverse();
                output.innerHTML = "";
                printing();
                break;
            case "Sort-a-z":
                inputArray.sort();
                output.innerHTML = "";
                printing();
                break;
            case "Sort-z-a":
                inputArray.sort().reverse();
                output.innerHTML = "";
                printing();
                break;
            case "Remove-from-to":
                inputArray.splice(removeFrom - 1, removeTo - 1);
                output.innerHTML = "";
                printing();
                break;
            default:
                console.log('error');
        };
    };
    
});