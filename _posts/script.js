 var pw = $('#pointer-circle-4');
 var offset = pw.offset();
    
        function mouse(e) {

            var center_x = (offset.left) + ( $('#pointer-wrap').width() / 2 );
            var center_y = (offset.top) + ( $('#pointer-wrap').height() / 2 );
            var mouse_x = e.pageX; 
            var mouse_y = e.pageY;
            var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
            var degree = (radians * (180 / Math.PI) * -1) + 180; 
            
            pw.css('-moz-transform', 'rotate('+degree+'deg)');
            pw.css('-webkit-transform', 'rotate('+degree+'deg)');
            pw.css('-o-transform', 'rotate('+degree+'deg)');
            pw.css('-ms-transform', 'rotate('+degree+'deg)');
            
        }


            $(document).mousemove(mouse);


            $('#target-box').mousemove(function(e){
        
                var x = e.pageX - this.offsetLeft;
                var y = e.pageY - this.offsetTop; 
                
            });
			
			
			
			