
$(document).ready(function() {


    var zi = 1; 

    
    var EmptySquare = 16;


 
    $.fn.extend({ fifteen:
 
        function(square_size) {

        
            var gameObjectElement = '#' + $(this).attr('id'); 
 
            var sqSize = square_size + 'px';
            var boardSize = (square_size * 4) + 'px';

            
            $(gameObjectElement).html('<div id="board"></div>'); 

            $('#board').css({ position:'absolute', width: boardSize, height: boardSize, border: '1px solid gray' });

            
            for (var i = 0; i < 16; i++) {
        
                $('#board').append("<div style='left: " + ((i % 4) * square_size) + "px; top: " + Math.floor(i / 4) * square_size + "px; width: " + square_size + "px; height: " + square_size + "px; background-position: " + (-(i % 4) * square_size) + "px " + -Math.floor(i / 4) * square_size + "px '></div>");
            }
 

            $('#board').children("div:nth-child(" + EmptySquare + ")").css({backgroundImage: "", background: "#ffffff"});

            $('#board').children('div').click(function() {
                Move(this, square_size);
            });
        }
    });

    function Move(clicked_square, square_size) {

        var movable = false;
 
        
        var oldx = $('#board').children("div:nth-child(" + EmptySquare + ")").css('left');
        var oldy = $('#board').children("div:nth-child(" + EmptySquare + ")").css('top');

        var newx = $(clicked_square).css('left');
        var newy = $(clicked_square).css('top');
 
        
        if (oldx == newx && newy == (parseInt(oldy) - square_size) + 'px')
            movable = true;
 
    
        if (oldx == newx && newy == (parseInt(oldy) + square_size) + 'px')
            movable = true;
 
    
        if ((parseInt(oldx) - square_size) + 'px' == newx && newy == oldy)
            movable = true;
 
    
        if ((parseInt(oldx) + square_size) + 'px' == newx && newy == oldy)
            movable = true;
 
        if (movable) {
        
            $(clicked_square).css('z-index', zi++);
 
            
            $(clicked_square).animate({ left: oldx, top: oldy }, 200, function() {
            
                $('#board').children("div:nth-child(" + EmptySquare + ")").css('left', newx);
                $('#board').children("div:nth-child(" + EmptySquare + ")").css('top', newy);
            });
        }
    }

    $('#game_object').fifteen(175);
});