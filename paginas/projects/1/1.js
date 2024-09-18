// Function to validate and parse input values
function getValidatedNumbers() {
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);

    if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById('resultado').value = 'Error';
        return null;
    }

    return { numero1, numero2 };
}

// Function to update the result and history
function updateResult(result) {
    document.getElementById('resultado').value = result;
    history.push(`${currentOperation} = ${result}`);
    updateHistory();
}

// Add history management
let history = [];
let currentOperation = '';

function updateHistory() {
    let historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
    history.forEach(entry => {
        let listItem = document.createElement('li');
        listItem.textContent = entry;
        historyList.appendChild(listItem);
    });
}

//shows history
function showHistory() {
    updateHistory();
}
//Function to add 
function suma() {
    let numbers = getValidatedNumbers();
    if (numbers) {
        let result = numbers.numero1 + numbers.numero2;
        currentOperation = `${numbers.numero1} + ${numbers.numero2}`;
        updateResult(result);
    }
}
//Function to subtract
function resta() {
    let numbers = getValidatedNumbers();
    if (numbers) {
        let result = numbers.numero1 - numbers.numero2;
        currentOperation = `${numbers.numero1} - ${numbers.numero2}`;
        updateResult(result);
    }
}
//Function to multiply
function mult() {
    let numbers = getValidatedNumbers();
    if (numbers) {
        let result = numbers.numero1 * numbers.numero2;
        currentOperation = `${numbers.numero1} * ${numbers.numero2}`;
        updateResult(result);
    }
}

//Function  to divide
function divi() {
    let numbers = getValidatedNumbers();
    if (numbers) {
        if (numbers.numero2 === 0) {
            document.getElementById('resultado').value = 'Error: Div/0';
            return;
        }
        let result = numbers.numero1 / numbers.numero2;
        currentOperation = `${numbers.numero1} / ${numbers.numero2}`;
        updateResult(result);
    }
}

//Function de find residuo
function resi() {
    let numbers = getValidatedNumbers();
    if (numbers) {
        let result = numbers.numero1 % numbers.numero2;
        currentOperation = `${numbers.numero1} % ${numbers.numero2}`;
        updateResult(result);
    }
}

// Memory functions
let memory = 0;
