$(document).ready(function(){
 
  $('div').hover(
    function(){
      $(this).toggleClass('active')
    },
    function(){
      $(this).toggleClass('active')
    }
  );

});

//.hover takes two arguments - this first executes when the mouse enters, the second executes when it leaves.