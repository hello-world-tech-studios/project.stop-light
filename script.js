$(document).ready(function(){
  $("body").keypress(function(event){
    if(event.keyCode == 13){
      console.log(event.keyCode)
      $("#rectangle").fadeOut(5000);
    }else{
      console.log("enter is dead")
      $("#rectangle").fadeIn(5000);
    }
    $("body").keypress(function(event){
      if(event.keyCode == 13){
        console.log(event.keyCode)
        $("#circle").fadeOut(5000);
      }else{
        console.log("enter is dead")
        $("#circle").fadeIn(5000);
          }
      });
  });
var go = $("#circle")
$("#green").click(function(){
  $(go).css("background-color", "green");
  $(stop).css("background-color", "grey")

})
var slow = $("#circle2")
$("#yellow").click(function(){
  $(go).css("background-color", "grey");
  $(slow).css("background-color", "yellow")
})
var stop = $("#circle3")
$("#red").click(function(){
  $(slow).css("background-color", "grey");
  $(stop).css("background-color", "red");
})
});

 
