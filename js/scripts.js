$(document).ready(function(){
  $("#form0ne").submit(function(event){
    const nameInput = $("input#name").val();
    const seasonInput = $("#season").val();
    const foodInput = $("#food").val();

    $(".name").text(nameInput);
    $(".season").text(seasonInput);
    $(".food").text(seasonInput);

    $("#answers").show();

    event.preventDefault();


  });
});




// console.log("Script executing!");
// $(document).ready(function() {
//   $("#formOne").submit(function() {
//     const nameInput = $("input#name").val();
  
//     $(".name").text(nameInput);



//     $("#answers").show();
//     event.preventDefault();
//   });
// });