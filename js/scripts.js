$(document).ready(function(){
  $("#form0ne").submit(function(event){
    const nameInput = $("input#name").val();
    

    $(".name").text(nameInput);

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