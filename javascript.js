$( document ).ready(function() {

  $('.create-oven').submit(function(event){
    event.preventDefault();
    $('.create-oven').hide();
    $('.oven').css("visibility", 'visible');
    $('#cook').css("visibility", 'visible');
  });

  $('.baking').submit(function(event){ 
    
    flavor = $('#flavor').val();
    baking = $('#BakeTime').val();
    event.preventDefault();
    var newCake = createCake(flavor, baking);
    $('p#countdown').html(baking);

    var ourCountdown = setInterval(function(){

      if (newCake.flavor == "fresa" && (newCake.bakeTime).isBetween(0, 1)) {
        console.log("hola ya entre");
        $('#timer').addClass('.Crudo')
        $('p#countdown').html(baking);
        baking--;
      }else{
        console.log("ya me fui");
        clearInterval(ourCountdown);
      }
    }, 500);

   //newCake.oven();

  });


});

// Class Pastel
function createCake(flavor, bakeTime) {
  var obj = {};
  obj.flavor = flavor;
  obj.bakeTime = bakeTime;
  return obj;
}

// Class PastelBatch
var Oven = function(){

  $.when(flavor == "fresa" && bakeTime == 10).then(message == 10);
}
// Class Oven
