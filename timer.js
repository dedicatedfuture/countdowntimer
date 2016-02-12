$(document).ready(function(){

     var seconds = 60;
    $('#starter').click(function(){
      display(seconds);
    });


    function display(seconds){
      if(seconds <= 10 && seconds !== 0){
        $(".title").css("background-color", "red");
      }else if (seconds === 0){
        message();
        $('#seconds').text(seconds);
        return;
      }
      $('#seconds').text(seconds);
      console.log(seconds);
      seconds--;


      setTimeout(display, 1000, seconds);
     }


    function message(){

      $('.title').append("<h1>Your time is up!")
      console.log("message firing")

    }

});