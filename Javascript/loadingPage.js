$(window).on("load", function() {
    $("#loadingWrapper").fadeOut(function() {
        // fadeOut complete. Remove the loading div
        setTimeout(removeLoader, 5500); //wait for page load PLUS two seconds.
    });
}); 
function removeLoader(){
    $( "#loadingWrapper" ).fadeOut(2500, function() {
      // fadeOut complete. Remove the loading div
      $( "#loadingWrapper" ).remove(); //makes page more lightweight 
  });  
}