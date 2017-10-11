/*----- constants -----*/


/*----- app's state (variables) -----*/

var b;
var turn;
var winner;


/*----- cached element references -----*/
var $circles = $('.bigSquare *');
var $msg = $('h1');

/*----- event listeners -----*/

$circles.on('click', function() {    
    var idx = parseInt(this.id);
    if (b[idx] || winner) return;  
    if (b[idx + 7]===0) return;
    b[idx] = turn;
    turn = turn === 'red' ? 'yellow' : 'red';
    winner = getWinner(idx);
    render()
    
})

$('#reset').on('click', function(){
    init();
    // render();
  });

/*----- functions -----*/

function init(){
    b = [
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0
    ];
    turn = 'red' ;
    winner = null;
    $('.circle').css("background-color", "white");
    $('h1').html(`Let's go again! Red goes first!`).css('color', 'red');    
    
}

function render() {
    $circles.each(function(idx) {
        // give the current div jQuery powers
         $(this).css('background-color', b[idx])
      });

    if (winner) {
        if (winner === 'T') {
          $msg.html('Crap ... tie game ...');
        } else {
          $msg.html(`Player ${winner} has won!`);
        }
      }
        else {
        $msg.css('color', turn).html(`It is Player ${turn}'s turn`)
      } 
      }
  // iterate through the board's rows.
    // board.forEach(function (turn, i) {
    //     // within each row we'll iterate through each column
    //     // if it's 1 make it red,
    //     if (turn === 1) {
    //         $($circles[i]).css('background-color', 'red');
    //     }
    //     // if it's -1 make it yellow,
    //     if (turn === -1) {
    //         $($circles[i]).css('background-color', 'yellow');
    //     }
    // })
    
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
        if (b.includes(0)){
            return 0;
        }
        if (!b.includes(0)){
            return 'T'
        }
    
    } 
}

init()
render()