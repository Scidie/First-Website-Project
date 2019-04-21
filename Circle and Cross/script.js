let winnersBoardContainer = document.getElementById('winners-board-container');
let winnerText = document.getElementById('winner-text');
let fields = Array.from(document.querySelectorAll('.field'))
let button = document.getElementById('button');

let handlers = {
    draw : "it's a draw!",
    fieldsArray: [0,0,0,
                  0,0,0,
                  0,0,0],

    addSymbolToArray: function(index, symbol) {
        this.fieldsArray[index] = symbol;
    },

    createCircleSymbol: function() {
        const circleImage = document.createElement('img');
        circleImage.src = 'images/circle.png';
        circleImage.classList.add('circle-image');
        return circleImage;
    },

    createCrossSymbol: function() {
        const crossImage = document.createElement('img');
        crossImage.src = 'images/cross.png';
        crossImage.classList.add('cross-image');
        return crossImage;
    },

    checkWhoWin: function(symbol) {
        fieldsArrayCounter = 0;

        for (let i = 0; i < this.fieldsArray.length; i++) {
            if (this.fieldsArray[i] === 'circle' || this.fieldsArray[i] === 'cross') {
                fieldsArrayCounter++;
            }
        }

        if (fieldsArrayCounter === this.fieldsArray.length) {
            this.createWinnersBoard(this.draw);
        }
        else if (this.fieldsArray[0] === symbol && 
            this.fieldsArray[1] === symbol && 
            this.fieldsArray[2] === symbol) {
            winnersBoardContainer.style.pointerEvents = 'all';
            this.createWinnersBoard(symbol);
        } else if (this.fieldsArray[0] === symbol && 
            this.fieldsArray[4] === symbol && 
            this.fieldsArray[8] === symbol) {
            winnersBoardContainer.style.pointerEvents = 'all';
            this.createWinnersBoard(symbol)
        } else if (this.fieldsArray[0] === symbol && 
            this.fieldsArray[3] === symbol && 
            this.fieldsArray[6] === symbol) {
            winnersBoardContainer.style.pointerEvents = 'all';
            this.createWinnersBoard(symbol)
        } else if (this.fieldsArray[1] === symbol && 
            this.fieldsArray[4] === symbol && 
            this.fieldsArray[7] === symbol) {
            winnersBoardContainer.style.pointerEvents = 'all';
            this.createWinnersBoard(symbol)
        } else if (this.fieldsArray[2] === symbol && 
            this.fieldsArray[4] === symbol && 
            this.fieldsArray[6] === symbol) {
            winnersBoardContainer.style.pointerEvents = 'all';
            this.createWinnersBoard(symbol)
        } else if (this.fieldsArray[2] === symbol && 
            this.fieldsArray[5] === symbol && 
            this.fieldsArray[8] === symbol) {
            winnersBoardContainer.style.pointerEvents = 'all';
            this.createWinnersBoard(symbol)
        } else if (this.fieldsArray[3] === symbol && 
            this.fieldsArray[4] === symbol && 
            this.fieldsArray[5] === symbol) {
            winnersBoardContainer.style.pointerEvents = 'all';
            this.createWinnersBoard(symbol)
        } else if (this.fieldsArray[6] === symbol && 
            this.fieldsArray[7] === symbol && 
            this.fieldsArray[8] === symbol) {
            winnersBoardContainer.style.pointerEvents = 'all';
            this.createWinnersBoard(symbol)
        } 
    },

    createWinnersBoard: function(winner) {
        winnersBoardContainer.style.pointerEvents = 'all';
        winnersBoardContainer.style.opacity = '1';
        console.log(winner);
        if (winner === handlers.draw) {
            winnerText.innerHTML =  `${handlers.draw}`;
        } else {winnerText.innerHTML =  `${winner} wins!`;} 
    }
}

let lastSymbolUsed = 'cross';
console.log(lastSymbolUsed);

fields.forEach(field => field.addEventListener('click', function(event) {
    if (field.firstChild === null) {
        if (lastSymbolUsed === 'cross') {
            field.appendChild(handlers.createCircleSymbol());
            let index = fields.indexOf(field);
            handlers.addSymbolToArray(index, 'circle');
            lastSymbolUsed = 'circle';
            handlers.checkWhoWin(lastSymbolUsed);
        } else {
            field.appendChild(handlers.createCrossSymbol());
            let index = fields.indexOf(field);
            handlers.addSymbolToArray(index, 'cross');
            lastSymbolUsed = 'cross';
            handlers.checkWhoWin(lastSymbolUsed);
        }
    }
}));

button.addEventListener('click', function() {
    for (let i = 0; i < handlers.fieldsArray.length; i++) {
        handlers.fieldsArray[i] = '0';
    }

    for (let i = 0; i < fields.length; i++) {
        if (fields[i].hasChildNodes()) {
            fields[i].removeChild(document.querySelector('img'));
        }   
    }

    winnersBoardContainer.style.pointerEvents = 'none';
    winnersBoardContainer.style.opacity = '0';
    lastSymbolUsed = 'cross';
});