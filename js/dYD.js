$(function(){
  $(".dragged").draggable();
  
  $(".wallcolor-picker").change(function(){
    console.log($(this).val());
    if($(this).val() === "Blue"){
       $(".room-container").css("background-color","blue");
       }
    if($(this).val() === "Purple"){
       $(".room-container").css("background-color","purple");
       }
    if($(this).val() === "Yellow"){
       $(".room-container").css("background-color","yellow");
       }
    if($(this).val() === "Pink"){
       $(".room-container").css("background-color","pink");
       }
  });
  
  $(".sidecolor-picker").change(function(){
    console.log($(this).val());
    if($(this).val() === "Blue"){
       $(".room-container").css("border-left", "100px solid #7B88E8");
       $(".room-container").css("border-right", "100px solid #7B88E8");
       }
    if($(this).val() === "Purple"){
       $(".room-container").css("border-left", "100px solid purple");
       $(".room-container").css("border-right", "100px solid purple");
       }
    if($(this).val() === "Yellow"){
       $(".room-container").css("border-left", "100px solid yellow");
       $(".room-container").css("border-right", "100px solid yellow");
       }
    if($(this).val() === "Pink"){
       $(".room-container").css("border-left", "100px solid pink");
       $(".room-container").css("border-right", "100px solid pink");
       }
  });
});