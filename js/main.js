/*----- app's state (variables) -----*/
var rowTracker;
var b;
var turn;
var winner;
var sounds;


/*----- cached element references -----*/
var $circles = $('.bigSquare *');
var $msg = $('h2');


/*----- event listeners -----*/
$circles.on('click', function() {    
    var idx = parseInt(this.id);
    if (b[idx] || winner) return;  
    if (b[idx + 7]===0) return;
    var rowTrackers = ['track', 'track2', 'track3', 'track4', 'track5', 'track6', 'track7'];
    rowTracker[rowTrackers[idx % 7]] -= 7;
    b[idx] = turn;
    turn = turn === '#f44242' ? 'Yellow' : '#f44242';
    winner = getWinner(idx);
    render();
});

// reset button
$('#reset').on('click', function(){
    init();
});

// hovering circles/buttons atop
$('#colButton1').on('click', function() {
    handleColumnClick('track');
});

$('#colButton2').on('click', function() {
    handleColumnClick('track2');
});

$('#colButton3').on('click', function() {
    handleColumnClick('track3');
});

$('#colButton4').on('click', function() {
    handleColumnClick('track4');
});

$('#colButton5').on('click', function() {
    handleColumnClick('track5');
});

$('#colButton6').on('click', function() {
    handleColumnClick('track6');
});

$('#colButton7').on('click', function() {
    handleColumnClick('track7');
});

/*----- functions -----*/
function init(){
    rowTracker = {
        track: 35,
        track2: 36,
        track3: 37,
        track4: 38,
        track5: 39,
        track6: 40,
        track7: 41
    };
    
    // b is a 42-element array board
    b = [
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0
    ];
    turn = '#f44242' ;
    winner = null;
    $msg.html(`Let's go again! Red goes first!`).css('color', '#f44242');    
    $('.circle').css("background-color", "white");
}

function render() {
    $circles.each(function(idx) {
        // give the current div jQuery powers
        $(this).css('background-color', b[idx])
    });

    // messages for winner/tie or next turn
    if (winner) {
        if (winner === 'T') {
          $msg.html('Rats! ... tie game ...');
        } else {
            if (winner==='#f44242'){
                $msg.html(`Player Red has won! &#x1f604 ... Play again!`);
            } else {
                $msg.html(`Player Yellow has won! &#x1f604 ... Play again!`);
            }
        }
    } else {
        if (turn==='#f44242'){
            $msg.css('color', turn).html(`It is Player Red's turn`)
        }   else {
            $msg.css('color', turn).html(`It is Player Yellow's turn`)
        }
    }
}

function handleColumnClick(track){
    for (var idx=rowTracker[track]; idx>=0; idx-=7) {
        if (b[idx+7]==='Yellow' || b[idx+7]==='#f44242' || b[idx+7]===undefined) {
            if (winner) return;  
            b[idx] = turn;
            turn = turn === '#f44242' ? 'Yellow' : '#f44242';
            winner = getWinner(idx);            
            render();
            rowTracker[track] -= 7;
            break;
        }
    }
}
    
function getWinner(idx) {
    if(idx >= 35 && idx <= 41) {idx = 35};
    if(idx >= 28 && idx <= 34) {idx = 28};
    if(idx >= 21 && idx <= 27) {idx = 21};
    if(idx >= 14 && idx <= 20) {idx = 14};
    if(idx >= 7 && idx <= 13) {idx = 7};
    if(idx >= 0 && idx <= 6) {idx = 0};
    
    for (var i=0; i<b.length; i++) {
        //vertical winning combinations
        if (b[i] && b[i]===b[i+7] && b[i]=== b[i+14] && b[i]===b[i+21]) {
            console.log('we got a winner')
            return b[i]
        }
        
        //horizontal winning combinations
        for (var j=idx; j<idx + 4; j++) {
        if (b[j] && b[j]===b[j+1] && b[j]===b[j+2] && b[j]===b[j+3]){
            console.log(b[j])
            return b[j]
            
            }  
        } 
        // diagonal left to right winning combinations
        for (var h=0; h<4; h++){
            if (b[h] && b[h]===b[h+8] && b[h]===b[h+16] && b[h]===b[h+24])
            return b[h];
        }
        for (var h=7; h<11; h++){
            if (b[h] && b[h]===b[h+8] && b[h]===b[h+16] && b[h]===b[h+24])
            return b[h];
        }
        for (var h=14; h<18; h++){
            if (b[h] && b[h]===b[h+8] && b[h]===b[h+16] && b[h]===b[h+24])
            return b[h];
        }
        
        //diagonal right to left winning combinations
        for (var h=3; h<7; h++){
            if (b[h] && b[h]===b[h+6] && b[h]===b[h+12] && b[h]===b[h+18])
            return b[h];
        }
        for (var h=10; h<14; h++){
            if (b[h] && b[h]===b[h+6] && b[h]===b[h+12] && b[h]===b[h+18])
            return b[h];
        }
        for (var h=17; h<21; h++){
            if (b[h] && b[h]===b[h+6] && b[h]===b[h+12] && b[h]===b[h+18])
            return b[h];
        }

        //tie game 
        if (!b.includes(0)){
            return 'T'
        }
    
    } 
}

init()
render()