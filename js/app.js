let btnRef = document.querySelectorAll('.button-option');
let restartBtn = document.getElementById('restart');
let popup = document.querySelector('.popup');
let message = document.getElementById('message');
let newGameBtn = document.getElementById('new-game');

// winning pattern array
let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6]
];

// player x plays first 
let xTurn = true;
let count = 0;

// disabled all btn
const disableButtons = () => {
        btnRef.forEach(element => { element.disabled = true });
        // enable popup
        popup.classList.remove('hide');
    }
    // enable all btn for new game and restart 
const enableBtn = () => {
    btnRef.forEach(element => {
            element.innerText = "";
            element.disabled = false
        })
        // disable popup
    popup.classList.add('hide')
}

// new game 
newGameBtn.addEventListener('click', () => {
    count = 0;
    enableBtn();
})

// this function will executed whe a player wins 
const winFunction = (letter) => {
    disableButtons();
}

// win logic 
const winChecker = () => {
    // loop through all win patterns
    for (let i of winningPattern) {
        let [element1, element2, element3] = [btnRef[i[0]].innerText, btnRef[i[1]].innerText, btnRef[i[2]].innerText];
        // check if elements are filled
        // if 3 empty elements are same and would give win as would
        if (element1 != "" && element2 != "" && element3 != "") {
            if (element1 === element2 && element2 === element3) {
                // if all 3 btn have same values than pass the value to winFunction
                winFunction(element1);
            }
        }
    }
}


// display x/0 on click
btnRef.forEach(element => {
    element.addEventListener('click', () => {
        if (xTurn) {
            xTurn = false;
            // display x 
            element.innerText = "X";
            element.disabled = true;
        } else {
            xTurn = true;
            // display o
            element.innerText = "O";
            element.disabled = true;

        }
        // incriment count on each click 
        count += 1;
        if (count === 9) {
            // 
        }
        winChecker();
    })
})