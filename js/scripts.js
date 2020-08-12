$(document).ready(function(){
  $("#form0ne").submit(function(event){
    const nameInput = $("input#name").val();
    const seasonInput = $("#season").val();
    const foodInput = $("input:radio[name=food]:checked").val();
    const bornInput = $("#born").val();
    const favoriteColor = $("#color").val();

    $(".name").text(nameInput);
    $(".season").text(seasonInput);
    $(".food").text(foodInput);
    $(".born").text(bornInput);
    $(".color").text(favoriteColor);

    $("#answers").show();

    event.preventDefault();


  });
});


