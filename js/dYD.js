$(function(){
  $(".dragged").draggable();
  
  /*$(".dragged").hover(function(){
    $(this).css("cursor","pointer");}, function(){
    $(this).css("cursor","auto");
  });*/
  
  $(".dragged").mouseenter(function(){
    $(this).css("cursor","pointer");
  });
  
  $(".dragged").click(function(){
    $(this).css("cursor","move");
  });
  
  $(".dragged").mouseout(function(){
    $(this).css("cursor","auto");
  });
});