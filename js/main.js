/*----- constants -----*/


/*----- app's state (variables) -----*/

var board;
var turn;
var winner;


/*----- cached element references -----*/
var $circles = $('.bigSquare *');
var $msg = $('h1');

/*----- event listeners -----*/

$circles.on('click', function() {    
    var idx = parseInt(this.id);
    if (board[idx] || winner) return;  
    if (board[idx + 7]===0) return;
    board[idx] = turn;
    turn = turn === 'red' ? 'yellow' : 'red';
    // rowAboveId = $(this).attr('id') - 7;
    // rowAbove = $(this).parent().find('#' + rowAboveId);
    // if (this.id > 34 || $(this).hasClass('empty'))
    // {
    //     $(this).attr('class', 'hasChip');
    //     rowAbove.attr('class', 'empty');     
    // } 
    winner = getWinner();
    render()
    
})

/*----- functions -----*/

function init(){
    // board = [
    //     [1, 1, 1, 1, 1, 1, 1],
    //     [1, 1, 1, 1, 1, 1, 1],
    //     [1, 1, 1, 1, 1, 1, 1],
    //     [1, 1, 1, 1, 1, 1, 1],
    //     [1, 1, 1, 1, 1, 1, 1],
    //     [0, 0, 0, 0, 0, 0, 0],
    // ];
    board = [
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0
    ];
    turn = 'red' ;
    winner = null;
}

function render() {
    $circles.each(function(idx) {
        // give the current div jQuery powers
         $(this).css('background-color', board[idx])
      });
    // $circles.each(function(idx) {
    //     $(this).css('background-color', board[idx]);

    // });
    // if ($(board[28]).not("[hasChip]")) return;
    // if (!$(board[28]).hasClass("hasChip")) return;
    // if ($(board[28]).hasClass("hasChip")===false) return;
    // // if (board[35]==='red') board[28]=2;
    // // if (board[35]==='red' || board[35]==='yellow') board[28] = 0;
    // // if (board[28]===0) board[28]='yellow'; 
    // // // if (board[36]==='red' || board[36]==='yellow') board[29] = 0;
    

    if (winner) {
        if (winner === 'T') {
          $msg.html('Crap ... tie game ...');
        } else {
          $msg.html(`Player ${winner} has won!`);
        }
      }
        else {
        $msg.html(`It is Player ${turn}'s turn`);
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

function getWinner() {
    if (board[35]===board[36] && board[35]===board[37] && board[35]===board[38]) {
        return board[35];
    }
}

$('h1').on('click', function(){
    $(this).css({backgroundColor: 'red'});
})



init()
render()