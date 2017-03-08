$(document).ready( function() {
    $(document).keydown( function(){
        $('div').animate({left: '+=10px'},500);
    });
});

// +=10px is the amount it moves
// 500 is the time (ms) taken to do it
// note how we call keydown on the whole document - you just have to click on the
// document for the whole thing to be listened to.