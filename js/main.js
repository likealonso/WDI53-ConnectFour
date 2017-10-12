/*----- constants -----*/


/*----- app's state (variables) -----*/

var b;
var turn;
var winner;


/*----- cached element references -----*/
var $circles = $('.bigSquare *');
var $msg = $('h2');

/*----- event listeners -----*/

$circles.on('click', function() {    
    var idx = parseInt(this.id);
    if (b[idx] || winner) return;  
    if (b[idx + 7]===0) return;
    b[idx] = turn;
    turn = turn === 'Red' ? 'Yellow' : 'Red';
    winner = getWinner(idx);
    render()
    
})
// $circles.on('onmouseover', function(){
//     $(this).style('cursor', 'grab')
// });

$('#reset').on('click', function(){
    init();
    // render();
  });

// column buttons logic  
//columns that dont work horizontally 2,3,4,5,6
// it displays winner one turn later

// $('#colButton1').on('click', function(){
// $('b[35]').css('background-color', 'red')})
//   
// for (var idx=41; idx>=0; idx--){
//       if(idx%7===0 && idx > 34); }}
//         )
var track = 35;
$('#colButton1').on('click', function(){
    for (var idx=track; idx>=0; idx-=7) {
        
        if (b[idx+7]==='Yellow' || b[idx+7]==='Red' || b[idx+7]===undefined) {
            if (winner) return;  
            b[idx] = turn;
            console.log('entering')
            console.log('idx = ', idx)
            console.log('turn =', turn)
            console.log('track = ', track)
            turn = turn === 'Red' ? 'Yellow' : 'Red';
            winner = getWinner(idx);            
            render()
            track -= 7
            break;
        }
    }
})

var track2 = 36;
$('#colButton2').on('click', function(){
    for (var idx=track2; idx>=0; idx-=7) {
        
        if (b[idx+7]==='Yellow' || b[idx+7]==='Red' || b[idx+7]===undefined) {
            if (winner) return;  
            b[idx] = turn;
            console.log('entering')
            console.log('idx = ', idx)
            console.log('turn =', turn)
            console.log('track = ', track)
            turn = turn === 'Red' ? 'Yellow' : 'Red';
            winner = getWinner(idx);            
            render()
            track2 -= 7
            break;
        }
    }
})

var track3 = 37;
$('#colButton3').on('click', function(){
    for (var idx=track3; idx>=0; idx-=7) {
        
        if (b[idx+7]==='Yellow' || b[idx+7]==='Red' || b[idx+7]===undefined) {
            if (winner) return;  
            b[idx] = turn;
            console.log('entering')
            console.log('idx = ', idx)
            console.log('turn =', turn)
            console.log('track = ', track)
            turn = turn === 'Red' ? 'Yellow' : 'Red';
            winner = getWinner(idx);            
            render()
            track3 -= 7
            break;
        }
    }
})

var track4 = 38;
$('#colButton4').on('click', function(){
    for (var idx=track4; idx>=0; idx-=7) {
        
        if (b[idx+7]==='Yellow' || b[idx+7]==='Red' || b[idx+7]===undefined) {
            if (winner) return;  
            b[idx] = turn;
            console.log('entering')
            console.log('idx = ', idx)
            console.log('turn =', turn)
            console.log('track = ', track)
            turn = turn === 'Red' ? 'Yellow' : 'Red';
            winner = getWinner(idx);            
            render()
            track4 -= 7
            break;
        }
    }
})

var track5 = 39;
$('#colButton5').on('click', function(){
    for (var idx=track5; idx>=0; idx-=7) {
        
        if (b[idx+7]==='Yellow' || b[idx+7]==='Red' || b[idx+7]===undefined) {
            if (winner) return;  
            b[idx] = turn;
            console.log('entering')
            console.log('idx = ', idx)
            console.log('turn =', turn)
            console.log('track = ', track)
            turn = turn === 'Red' ? 'Yellow' : 'Red';
            winner = getWinner(idx);            
            render()
            track5 -= 7
            break;
        }
    }
})

var track6 = 40;
$('#colButton6').on('click', function(){
    for (var idx=track6; idx>=0; idx-=7) {
        
        if (b[idx+7]==='Yellow' || b[idx+7]==='Red' || b[idx+7]===undefined) {
            if (winner) return;  
            b[idx] = turn;
            console.log('entering')
            console.log('idx = ', idx)
            console.log('turn =', turn)
            console.log('track = ', track)
            turn = turn === 'Red' ? 'Yellow' : 'Red';
            winner = getWinner(idx);            
            render()
            track6 -= 7
            break;
        }
    }
})

var track7 = 41;
$('#colButton7').on('click', function(){
    for (var idx=track7; idx>=0; idx-=7) {
        
        if (b[idx+7]==='Yellow' || b[idx+7]==='Red' || b[idx+7]===undefined) {
            if (winner) return;  
            b[idx] = turn;
            console.log('entering')
            console.log('idx = ', idx)
            console.log('turn =', turn)
            console.log('track = ', track)
            turn = turn === 'Red' ? 'Yellow' : 'Red';
            winner = getWinner(idx);            
            render()
            track7 -= 7
            break;
        }
    }
})


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
    turn = 'Red' ;
    winner = null;
    $('.circle').css("background-color", "white");
    $('h2').html(`Let's go again! Red goes first!`).css('color', 'red');    
    
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
        // if (b.includes(0)){
        //     return 0;
        // }
        if (!b.includes(0)){
            return 'T'
        }
    
    } 
}

init()
render()


// var track1 = 36;
// $('#colButton2').on('click', function(){
//     // for (var j=idx; j<idx + 4; j++)
//     for (var idx=track1; idx>=0; idx-=7) {
//         if (b[36]===0){
//             if (winner) return;
//             b[36] = turn;
//             turn = turn === 'Red' ? 'Yellow' : 'Red';
//             winner = getWinner(idx);
//             render();
//             break;
//         }
//         if (track1 === 1) return;
//         if (b[idx]==='Yellow' || b[idx]==='Red') {
//             if (winner) return;  
//             b[idx-7] = turn;
//             turn = turn === 'Red' ? 'Yellow' : 'Red';
            
//             winner = getWinner(idx);
//             render()
//             track1 -= 7
//             break;
//         }
//     }
// })

// var track2 = 37;
// $('#colButton3').on('click', function(){
//     // for (var j=idx; j<idx + 4; j++)
//     for (var idx=track2; idx>=0; idx-=7) {
//         if (b[37]===0){
//             if (winner) return;
//             b[37] = turn;
//             turn = turn === 'Red' ? 'Yellow' : 'Red';
//             winner = getWinner(idx);
//             render();
//             break;
//         }
//         if (track2 === 2) return;
//         if (b[idx]==='Yellow' || b[idx]==='Red') {
//             if (winner) return;  
//             b[idx-7] = turn;
//             turn = turn === 'Red' ? 'Yellow' : 'Red';
            
//             winner = getWinner(idx);
//             render()
//             track2 -= 7
//             break;
//         }
//     }
// })

// var track3 = 38;
// $('#colButton4').on('click', function(){
//     // for (var j=idx; j<idx + 4; j++)
//     for (var idx=track3; idx>=0; idx-=7) {
//         if (b[38]===0){
//             if (winner) return;
//             b[38] = turn;
//             turn = turn === 'Red' ? 'Yellow' : 'Red';
//             winner = getWinner(idx);
//             render();
//             break;
//         }
//         if (track3 === 3) return;
//         if (b[idx]==='Yellow' || b[idx]==='Red') {
//             if (winner) return;  
//             b[idx-7] = turn;
//             turn = turn === 'Red' ? 'Yellow' : 'Red';
            
//             winner = getWinner(idx);
//             render()
//             track3 -= 7
//             break;
//         }
//     }
// })

// var track4 = 39;
// $('#colButton5').on('click', function(){
//     // for (var j=idx; j<idx + 4; j++)
//     for (var idx=track4; idx>=0; idx-=7) {
//         if (b[39]===0){
//             if (winner) return;
//             b[39] = turn;
//             turn = turn === 'Red' ? 'Yellow' : 'Red';
//             winner = getWinner(idx);
//             render();
//             break;
//         }
//         if (track4 === 4) return;
//         if (b[idx]==='Yellow' || b[idx]==='Red') {
//             if (winner) return;  
//             b[idx-7] = turn;
//             turn = turn === 'Red' ? 'Yellow' : 'Red';
            
//             winner = getWinner(idx);
//             render()
//             track4 -= 7
//             break;
//         }
//     }
// })

// var track5 = 40;
// $('#colButton6').on('click', function(){
//     // for (var j=idx; j<idx + 4; j++)
//     for (var idx=track5; idx>=0; idx-=7) {
//         if (b[40]===0){
//             if (winner) return;
//             b[40] = turn;
//             turn = turn === 'Red' ? 'Yellow' : 'Red';
//             winner = getWinner(idx);
//             render();
//             break;
//         }
//         if (track5 === 5) return;
//         if (b[idx]==='Yellow' || b[idx]==='Red') {
//             if (winner) return;  
//             b[idx-7] = turn;
//             turn = turn === 'Red' ? 'Yellow' : 'Red';
//             winner = getWinner(idx);
//             render()
//             track5 -= 7
//             break;
//         }
//     }
// })

// var track6 = 41;
// $('#colButton7').on('click', function(){
//     // for (var j=idx; j<idx + 4; j++)
//     for (var idx=track6; idx>=0; idx-=7) {
//         if (b[41]===0){
//             if (winner) return;
//             b[41] = turn;
//             turn = turn === 'Red' ? 'Yellow' : 'Red';
//             winner = getWinner(idx);
//             render();
//             break;
//         }
//         if (track6 === 6) return;
//         if (b[idx]==='Yellow' || b[idx]==='Red') {
//             if (winner) return;
//             b[idx-7] = turn;
//             turn = turn === 'Red' ? 'Yellow' : 'Red';
            
//             winner = getWinner(idx);
//             render()
//             track6 -= 7
//             break;
//         }
//     }
// })