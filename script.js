$(document).ready(function(){
   $("body").keypress(function(event){
     if(event.keyCode == 13){
       console.log(event.keyCode)
       $("#rectangle").fadeOut(5000);
     }else{
       console.log("enter is dead")
       $("#rectangle").fadeIn(5000);
     }













});
});
