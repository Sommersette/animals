$(function() {

  $("#animal").click(function(event) {
    event.preventDefault();

   var animal = $("input:radio[name=animal]:checked").val();
   $(".animal").hide();

   if (animal === "snake") {
     $(".sInfo").show();
    } else if (animal === "turtle") {
      $(".tInfo").show();
    }
    else {
      $(".iInfo").show();
    }


  });
  });
