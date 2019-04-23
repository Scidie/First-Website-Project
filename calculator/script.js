
const buttonsContainer = document.querySelector('.buttons-container');
const symbolsContainer = document.querySelector('.symbols-container');
let outputDisplay = document.getElementById('output-display');

let history = '';
let resetOutput = false;

buttonsContainer.addEventListener('click', function(event) {
    if (resetOutput === true) {
        outputDisplay.value = '';
        resetOutput = false;
    }
    outputDisplay.value += event.target.innerHTML;
});

symbolsContainer.addEventListener('click', function(event) {

    let symbol = event.target.innerHTML;

    if (symbol !== '=') {
        addToHistory(outputDisplay.value, symbol);
        resetOutput = true;
    } else if (symbol === '=') {
        symbol = '';
        addToHistory(outputDisplay.value, symbol);
        outputDisplay.value = evaluate();
        history = '';
    }
    
});

function addToHistory(output, symbol) {
    history += output + symbol;
}

function evaluate() {
    let evaluatedHistory = eval(history).toString();
    return evaluatedHistory;
}




