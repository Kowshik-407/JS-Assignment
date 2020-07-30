// document.write(' Welcome to the StopWatch Generator ::> ');

// let Stopwatch = function(elem, options) {

//     let timer           = createTimer(),
//         startButton     = createButton('Start', start),
//         stopButton      = createButton('Stop', stop),
//         resetButton     = createButton('reset' , reset),
//         offset, clock, interval;

//     // Default Options 
//     options = options || {};
//     options.delay = options.delay || 1;


//     // Append Elements 
//     elem.appendChild(timer);
//     elem.appendChild(startButton);
//     elem.appendChild(stopButton);
//     elem.appendChild(resetButton);


//     // Initialize
//     reset();

//     // Private functions 
//     function createTimer() {
//         return document.createElement('span');
//     }

//     function createButton(action, handler) {
//         let a = document.createElement('a');
//         a.href = '#' + action;
//         a.innerHTML = action;
//         a.addEventListener('click', function(event) {
//             handler();
//             event.preventDefault();
//         });
//         return a;
//     }

//     function start() {
//         if(!interval) {
//             offset = Date.now();
//             interval = setInterval(update, options.delay);
//         }
//     }

//     function stop() {
//         if(interval) {
//             clearInterval(interval);
//             interval = null;
//         }
//     }

//     function reset() {
//         clock = 0;
//         render();
//     }

//     function render() {
//         timer.innerHTML = clock /1000;
//     }

//     function delta() {
//         let now = Date.now(), 
//             d = now - offset;

//         offset = now;
//         return d;
//     }

//     // Public API
//     this.start = start;
//     this.stop  = stop; 
//     this.reset = reset;
// };

// let elems = document.getElementsByClassName('stopwatch');

// for(let i = 0 , len = elems.length; i < len; i++) {
//     new Stopwatch(elems[i]);
// }


// let elem = document.getElementById('my-stopwatch');
// let timer = new Stopwatch(elem, {delay : 10});

// // start the timer
// timer.start();

// // stop the timer 
// timer.stop();

// // reset the timer
// timer.reset();


// function StopWatch() {
//     let startTime, endTime, isRunning, duration = 0;

//     this.start = function() {
//         if(isRunning) throw new Error("StopWatch has already been started. ");

//         isRunning = true;

//         startTime = new Date();
//     };

//     this.stop = function() {
//         if(!isRunning) throw new Error("StopWatch has already been stop. ");

//         isRunning = false;

//         endTime = new Date();

//         const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
//         duration += seconds;
//     };

//     this.reset = function() {
//         duration = 0;
//         startTime = null; 
//         endTime = null;
//         isRunning = false;

//     };


//     Object.defineProperty(this, "duration", {
//         get: function() {
//             return duration;
//         }
//     });
// }

// const sw = new StopWatch();


let output = document.getElementById('stopwatch');
let ms = 0, sec = 0, min = 0;

function timer() {
    ms++;
    if(ms >= 100) {
        sec++
        ms = 0
    }
    if(sec == 60){
        min++
        sec = 0
    }
    if(min == 60){
        ms, sec, min = 0;
    }

    // Doing some string interpolation 
    let milli = ms < 10 ? '0' + ms : ms;
    let seconds = sec < 10 ?  '0' + sec : sec;
    let minute = min < 10 ? '0' + min : min;

    let timer = `${minute} : ${seconds} : ${milli}`;
    output.innerHTML = timer;
};

// Start timer 
function start() {
    time = setInterval(timer, 10);
}

// Stop timer
function stop() {
    clearInterval(time);
}

// reset timer
function reset() {
    ms = 0; 
    sec = 0;
    min = 0;

    output.innerHTML = '00 : 00 : 00'
}

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');


startBtn.addEventListener('click', start, false);
stopBtn.addEventListener('click', stop, false);
resetBtn.addEventListener('click', reset, false);
