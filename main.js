
          $('h1').on('mouseenter', function () {
           $('#test').show();
           $('#test3').show();
           $('.draaio').show();
           $(this).css({
               "text-decoration": "underline"
           });
       });


  $('#north').on('mouseenter', function () {
           $('#cutter').show();
       });
          

  $('#area7').on('mouseenter', function () {
           $('#click').show();
       });

  $('#cutter').on('mouseenter', function () {
           $('#vlieg').show();
       });


  $('#cutter').on('mouseleave', function () {
           $('#vlieg').hide();
       });

  $('#area').on('mouseenter', function () {
           $('#gov').show();
       });

  $('#area2').on('mouseenter', function () {
           $('#hoofd1').show();
       });

  $('#area3').on('mouseenter', function () {
           $('#hoofd2').show();
       });

  $('#hoofd1').on('mouseenter', function () {
           $('#crab').show();
       });

  $('#hoofd2').on('mouseenter', function () {
           $('#orion').show();
       });

  $('#area4').on('mouseenter', function () {
           $('#gek').show();
       });

  $('#area5').on('mouseenter', function () {
           $('#crime').show();
       });
  
  $('#gek').on('mouseenter', function () {
           $('#Williams').show();
       });

 function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}


var $cog = $('#north'),
    $body = $(document.body),
    bodyHeight = $body.height();

 var $cog2 = $('.draaio');   

 var $cog3 = $('#gov');

$(window).scroll(function () {
    $cog.css({
        'transform': 'rotate(' + ($body.scrollTop() / bodyHeight * 360) + 'deg)'
    });

    $cog2.css({
        'transform': 'rotate(' + ($body.scrollTop() / bodyHeight * 360) + 'deg)'
    });

    $cog3.css({
        'transform': 'rotate(' + ($body.scrollTop() / bodyHeight * 360) + 'deg)'
    });
});

$( function() {
    $( ".draaio" ).draggable();
});

$( function() {
    $( "#cutter" ).draggable();
});

$( function() {
    $( "#north").draggable();
});

$( function() {
    $( "#gov").draggable();
});

$( function() {
    $( "#orion" ).draggable();
});

$( function() {
    $( "#gek" ).draggable();
});

$( function() {
    $( "#Williams" ).draggable();
});

$("#cutter").click(function(){
    $("#north").clone().appendTo("body");
});


