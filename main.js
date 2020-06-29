"use strict"

const inhaleTime = 3000;
const holdTime = 2000;
const totalTime = 9000;

const textPromt = document.getElementById('text-prompts')
const container = document.getElementById('container')

breathe();

function breathe() {
    textPromt.innerText = 'Breathe';
    //container.className = 'grow';

    setTimeout(() => {
        textPromt.innerText = 'Hold';
        
        setTimeout(() => {
            textPromt.innerText = 'Exhale';
            //container.className = 'shrink';
        }, holdTime);
    }, inhaleTime);
}

setInterval(breathe, totalTime);
