/* 
 *
 * Code by Dandy: https://github.com/WhimsicallyDandy/Syntax2018nuskool
 * and greybot: https://github.com/earlgreybot/Syntax2018nuskool 
 * for Syntax 2018
 * 
 * 
 * Goals:
 * Teledildonix out of CSS
 * Rotate shapes
 * 
 */

/* INIT */
console.log('this is valig code');


/* CONSTANTS */
const SHAPE_SIZE = 100;
const MOVE_INTERVAL = 1000;
const YEET = 100;

/* VARIABLES */
var spans = $('span');
var animInterval = MOVE_INTERVAL;


/* MAIN: READY */

// this only runs the following corde when the page is ready to be manipulated,
// though not when everything is loaded, like pics
$(document).ready(function() {
    // y u override
    $('#circle').css('position', 'fixed');
    
    randElementPos('span', SHAPE_SIZE);
    var interval = setInterval(function() {
        //randElementPos('span', SHAPE_SIZE);
        randElementMove('span', animInterval);
    }, animInterval);

    /* Buttons and stuff */
    // yeets to right
    $('#butt').click(function(event) {
        $('#circle').animate({
            left: '+=500px'
            }, 'slow');
    });
    // sets animation to YEET
    $('#interval-set').click(function(event) {
        animInterval = YEET;
        var interval = setInterval(function() {
            //randElementPos('span', SHAPE_SIZE);
            randElementMove('span', animInterval);
        }, animInterval);
    });
});

/* METHODS/FUNCTIONS/WHATEVER */

/* BIG BOIS */

// all occurences of a given element are given random positions on screen
function randElementPos(e, buffer) {
    $(e).each(function(index) {
        // creates a random int between 0 and document width /2
        $(this).css('top', randY(buffer)+'px');
        $(this).css('left', randX(buffer)+'px');
    }); 
}

function randElementMove(e, t) {
    $(e).each(function(index) {
        moveTo($(this), randX(SHAPE_SIZE), randY(SHAPE_SIZE), t);
    });
}

function repRandElementMove(e, t) {
    randElementMove(e, t, function() {
        repRandElementMove(e, t);
    });
}

/* HELPERS */

/* Moves thing to position x,y over time */
function moveTo(e, x, y, t) {
    $(e).animate({
        left: x+'px',
        top: y+'px'
    }, t);
}

// returns a random int between min and max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

// returns random positions within document bounds, with x/y buffers to stop going off screen
function randX(buffer) {
    return randInt(0, $(document).width()-buffer);
}

function randY(buffer) {
    return randInt(0, $(document).height()-buffer);
}

function toRad(x) {
    return x*Math.PI/180;
}

function toDeg(x) {
    return x*180/Math.PI;
}

/* This is the failed bee experiment
// requests to open file
var bee = new XMLHttpRequest();
var beeText;
// paragraph data to change
var paragraph = document.querySelector
// opens the file, selects location, yes password all good
bee.open("GET", 'res/notbee.txt', true);

bee.onload = function() {
    // if the bee has in fact loaded
    if (bee.readyState === bee.DONE) {
        // all content loaded when readystate is done and status is 200
        if (bee.status === 200) {
            console.log(bee.response);
            console.log(bee.responseText);
        }

    }
}
bee.send(null);
*/
