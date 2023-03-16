console.log('This is tic tac toe');
// Function called whenever user tab on any box
function myfunc() {
    // Setting DOM to all boxes or input field
    let btn1 = document.getElementById("btn1").value;
    let btn2 = document.getElementById("btn2").value;
    let btn3 = document.getElementById("btn3").value;
    let btn4 = document.getElementById("btn4").value;
    let btn5 = document.getElementById("btn5").value;
    let btn6 = document.getElementById("btn6").value;
    let btn7 = document.getElementById("btn7").value;
    let btn8 = document.getElementById("btn8").value;
    let btn9 = document.getElementById("btn9").value;

    // Checking if Player X won or not and after that disabled all the other fields
    if ((btn1 == 'x' || btn1 == 'X') && (btn2 == 'x' || btn2 == 'X') && (btn3 == 'x' || btn3 == 'X')) {
        document.getElementById('result').innerHTML = "Player X won";
        document.getElementById("btn4").disabled = true;
        document.getElementById("btn5").disabled = true;
        document.getElementById("btn6").disabled = true;
        document.getElementById("btn7").disabled = true;
        document.getElementById("btn8").disabled = true;
        document.getElementById("btn9").disabled = true;
        // window.alert('Player X won');
    }
    else if ((btn1 == 'x' || btn1 == 'X') && (btn4 == 'x' || btn4 == 'X') && (btn7 == 'x' || btn7 == 'X')) {
        document.getElementById('result').innerHTML = "Player X won";
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn3").disabled = true;
        document.getElementById("btn5").disabled = true;
        document.getElementById("btn6").disabled = true;
        document.getElementById("btn8").disabled = true;
        document.getElementById("btn9").disabled = true;

        // window.alert('Player X won');
    }
    else if ((btn7 == 'x' || btn7 == 'X') && (btn8 == 'x' || btn8 == 'X') && (btn9 == 'x' || btn9 == 'X')) {
        document.getElementById('result').innerHTML = "Player X won";
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn3").disabled = true;
        document.getElementById("btn4").disabled = true;
        document.getElementById("btn5").disabled = true;
        document.getElementById("btn6").disabled = true;
        // window.alert('Player X won');
    }
    else if ((btn3 == 'x' || btn3 == 'X') && (btn6 == 'x' || btn6 == 'X') && (btn9 == 'x' || btn9 == 'X')) {
        document.getElementById('result').innerHTML = "Player X won";
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn4").disabled = true;
        document.getElementById("btn5").disabled = true;
        document.getElementById("btn7").disabled = true;
        document.getElementById("btn8").disabled = true;
        // window.alert('Player X won');
    }
    else if ((btn1 == 'x' || btn1 == 'X') && (btn5 == 'x' || btn5 == 'X') && (btn9 == 'x' || btn9 == 'X')) {
        document.getElementById('result').innerHTML = "Player X won";
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn3").disabled = true;
        document.getElementById("btn4").disabled = true;
        document.getElementById("btn6").disabled = true;
        document.getElementById("btn7").disabled = true;
        document.getElementById("btn8").disabled = true;
        // window.alert('Player X won');
    }
    else if ((btn3 == 'x' || btn3 == 'X') && (btn5 == 'x' || btn5 == 'X') && (btn7 == 'x' || btn7 == 'X')) {
        document.getElementById('result').innerHTML = "Player X won";
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn4").disabled = true;
        document.getElementById("btn6").disabled = true;
        document.getElementById("btn8").disabled = true;
        document.getElementById("btn9").disabled = true;
        // window.alert('Player X won');
    }
    else if ((btn2 == 'x' || btn2 == 'X') && (btn5 == 'x' || btn5 == 'X') && (btn8 == 'x' || btn8 == 'X')) {
        document.getElementById('result').innerHTML = "Player X won";
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn3").disabled = true;
        document.getElementById("btn4").disabled = true;
        document.getElementById("btn6").disabled = true;
        document.getElementById("btn7").disabled = true;
        document.getElementById("btn9").disabled = true;
        // window.alert('Player X won');
    }
    else if ((btn4 == 'x' || btn4 == 'X') && (btn5 == 'x' || btn5 == 'X') && (btn6 == 'x' || btn6 == 'X')) {
        document.getElementById('result').innerHTML = "Player X won";
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn3").disabled = true;
        document.getElementById("btn7").disabled = true;
        document.getElementById("btn8").disabled = true;
        document.getElementById("btn9").disabled = true;
        // window.alert('Player X won');
    }

    // Checking of Player X finish
    // Checking for Player 0 starts, Is player 0 won or not and after that disabled all the other fields
    else if ((btn1 == '0' || btn1 == '0') && (btn2 == '0' || btn2 == '0') && (btn3 == '0' || btn3 == '0')) {
        document.getElementById('result').innerHTML = "Player 0 won";
        document.getElementById("btn4").disabled = true;
        document.getElementById("btn5").disabled = true;
        document.getElementById("btn6").disabled = true;
        document.getElementById("btn7").disabled = true;
        document.getElementById("btn8").disabled = true;
        document.getElementById("btn9").disabled = true;
        // window.alert('Player 0 won');
    }
    else if ((btn1 == '0' || btn1 == '0') && (btn4 == '0' || btn4 == '0') && (btn7 == '0' || btn7 == '0')) {
        document.getElementById('result').innerHTML = "Player 0 won";
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn3").disabled = true;
        document.getElementById("btn5").disabled = true;
        document.getElementById("btn6").disabled = true;
        document.getElementById("btn8").disabled = true;
        document.getElementById("btn9").disabled = true;
        // window.alert('Player 0 won');
    }
    else if ((btn7 == '0' || btn7 == '0') && (btn8 == '0' || btn8 == '0') && (btn9 == '0' || btn9 == '0')) {
        document.getElementById('result').innerHTML = "Player 0 won";
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn3").disabled = true;
        document.getElementById("btn4").disabled = true;
        document.getElementById("btn5").disabled = true;
        document.getElementById("btn6").disabled = true;
        // window.alert('Player 0 won');
    }
    else if ((btn3 == '0' || btn3 == '0') && (btn6 == '0' || btn6 == '0') && (btn9 == '0' || btn9 == '0')) {
        document.getElementById('result').innerHTML = "Player 0 won";
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn4").disabled = true;
        document.getElementById("btn5").disabled = true;
        document.getElementById("btn7").disabled = true;
        document.getElementById("btn8").disabled = true;
        // window.alert('Player 0 won');
    }
    else if ((btn1 == '0' || btn1 == '0') && (btn5 == '0' || btn5 == '0') && (btn9 == '0' || btn9 == '0')) {
        document.getElementById('result').innerHTML = "Player 0 won";
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn3").disabled = true;
        document.getElementById("btn4").disabled = true;
        document.getElementById("btn6").disabled = true;
        document.getElementById("btn7").disabled = true;
        document.getElementById("btn8").disabled = true;
        // window.alert('Player 0 won');
    }
    else if ((btn3 == '0' || btn3 == '0') && (btn5 == '0' || btn5 == '0') && (btn7 == '0' || btn7 == '0')) {
        document.getElementById('result').innerHTML = "Player 0 won";
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn4").disabled = true;
        document.getElementById("btn6").disabled = true;
        document.getElementById("btn8").disabled = true;
        document.getElementById("btn9").disabled = true;
        // window.alert('Player 0 won');
    }
    else if ((btn2 == '0' || btn2 == '0') && (btn5 == '0' || btn5 == '0') && (btn8 == '0' || btn8 == '0')) {
        document.getElementById('result').innerHTML = "Player 0 won";
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn3").disabled = true;
        document.getElementById("btn4").disabled = true;
        document.getElementById("btn6").disabled = true;
        document.getElementById("btn7").disabled = true;
        document.getElementById("btn9").disabled = true;
        // window.alert('Player 0 won');
    }
    else if ((btn4 == '0' || btn4 == '0') && (btn5 == '0' || btn5 == '0') && (btn6 == '0' || btn6 == '0')) {
        document.getElementById('result').innerHTML = "Player 0 won";
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn3").disabled = true;
        document.getElementById("btn7").disabled = true;
        document.getElementById("btn8").disabled = true;
        document.getElementById("btn9").disabled = true;
        // window.alert('Player 0 won');
    }

    // Checking of Player 0 finish. Here, Checking about Tie
    else if ((btn1 == 'X' || btn1 == '0') && (btn2 == 'X' || btn2 == '0') && (btn3 == 'X' || btn3 == '0') &&
        (btn4 == 'X' || btn4 == '0') && (btn5 == 'X' || btn5 == '0') && (btn6 == 'X' || btn6 == '0') &&
        (btn7 == 'X' || btn7 == '0') && (btn8 == 'X' || btn8 == '0') && (btn9 == 'X' || btn9 == '0')) {
        document.getElementById('result').innerHTML = "Match Tie";

    }
    else {
        // Here, resulting Result
        if (flag == 1) {
            document.getElementById('result').innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('result').innerHTML = "Player 0 Turn";
        }
    }
}

// Function to reset game
function myfunc_2() {
    location.reload();
    document.getElementById('btn1').value = '';
    document.getElementById("btn2").value = '';
    document.getElementById("btn3").value = '';
    document.getElementById("btn4").value = '';
    document.getElementById("btn5").value = '';
    document.getElementById("btn6").value = '';
    document.getElementById("btn7").value = '';
    document.getElementById("btn8").value = '';
    document.getElementById("btn9").value = '';
}

flag = 1;
function myfunc_3() {
    if (flag == 1) {
        document.getElementById("btn1").value = "X";
        document.getElementById("btn1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("btn1").value = "0";
        document.getElementById("btn1").disabled = true;
        flag = 1;
    }
}

function myfunc_4() {
    if (flag == 1) {
        document.getElementById("btn2").value = "X";
        document.getElementById("btn2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("btn2").value = "0";
        document.getElementById("btn2").disabled = true;
        flag = 1;
    }
}

function myfunc_5() {
    if (flag == 1) {
        document.getElementById("btn3").value = "X";
        document.getElementById("btn3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("btn3").value = "0";
        document.getElementById("btn3").disabled = true;
        flag = 1;
    }
}

function myfunc_6() {
    if (flag == 1) {
        document.getElementById("btn4").value = "X";
        document.getElementById("btn4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("btn4").value = "0";
        document.getElementById("btn4").disabled = true;
        flag = 1;
    }
}

function myfunc_7() {
    if (flag == 1) {
        document.getElementById("btn5").value = "X";
        document.getElementById("btn5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("btn5").value = "0";
        document.getElementById("btn5").disabled = true;
        flag = 1;
    }
}

function myfunc_8() {
    if (flag == 1) {
        document.getElementById("btn6").value = "X";
        document.getElementById("btn6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("btn6").value = "0";
        document.getElementById("btn6").disabled = true;
        flag = 1;
    }
}

function myfunc_9() {
    if (flag == 1) {
        document.getElementById("btn7").value = "X";
        document.getElementById("btn7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("btn7").value = "0";
        document.getElementById("btn7").disabled = true;
        flag = 1;
    }
}

function myfunc_10() {
    if (flag == 1) {
        document.getElementById("btn8").value = "X";
        document.getElementById("btn8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("btn8").value = "0";
        document.getElementById("btn8").disabled = true;
        flag = 1;
    }
}

function myfunc_11() {
    if (flag == 1) {
        document.getElementById("btn9").value = "X";
        document.getElementById("btn9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("btn9").value = "0";
        document.getElementById("btn9").disabled = true;
        flag = 1;
    }
}
