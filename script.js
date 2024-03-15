var segundos = 0;
var minutos = 0;
var horas = 0;

var started = false;

var arrayTime = [
    [0, 0], // Segundos
    [0, 0], // Minutos
    [0, 0]  // Horas

]

var timerID = setInterval(function () { // Timer que conta os segundos, minutos e horas 
    if (started != false) {
        segundos += 1;
        if (segundos == 60) {
            minutos++;
            segundos = 0;
        }
        if (minutos == 60) {
            horas++;
            minutos = 0;
        }
        secondsToArray();
    }
}, 1000)

 
function startTimer() { // Inicia o timer
    if (started == false) {
        started = true;
        console.log('Começado');
    }
}

function stopTimer() { // Pausa o timer
    if (started == true) {
        started = false;
        console.log('Pausado');
    }
}

function resetTimer() { // Reinicia o timer
    segundos = 0;
    minutos = 0;
    horas = 0;
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 2; j++) {
            arrayTime[i][j] = 0
        }
    }
    timePassed();
}

function secondsToArray() { // Formata os segundos para o output
    if (arrayTime[0].join('') == '59') {
        arrayTime[0][1] = 0;
        arrayTime[0][0] = 0;
        minutesToArray();
    } else if ((segundos % 10) == 0) {
        arrayTime[0][1] = 0;
        arrayTime[0][0] += 1;
        timePassed();
    } else {
        arrayTime[0][1] = (segundos % 10);
        timePassed();
    }
}

function minutesToArray() { // Formata os segundos para o output
    if (arrayTime[1].join('') == '59') {
        arrayTime[1][1] = 0;
        arrayTime[1][0] = 0;
        hoursToArray();
    } else if ((minutos % 10) == 0) {
        arrayTime[1][1] = 0;
        arrayTime[1][0] += 1;
        timePassed();
    } else {
        arrayTime[1][1] = (minutos % 10);
        timePassed();
    }
}

function hoursToArray() { // Formata os segundos para o output
    if (arrayTime[2].join('') == '23') {
        arrayTime[2][1] = 0;
        arrayTime[2][0] = 0;
    } else if ((horas % 10) == 0) {
        arrayTime[2][1] = 0;
        arrayTime[2][0] += 1;
    } else {
        arrayTime[2][1] = (horas % 10);
    }
    timePassed();
}

function timePassed() { // Output do horário
    document.getElementById('timer').innerHTML = arrayTime[2][0] + '' + arrayTime[2][1] + ':' + arrayTime[1][0] + '' + arrayTime[1][1] + ':' + arrayTime[0][0] + '' + arrayTime[0][1]
}
