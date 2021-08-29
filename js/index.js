console.log("Hello world!");

$( "p" ).on( "test.something", function( event ) {
  alert( event.namespace );
});
$( "button" ).click(function( event ) {
  $( "p" ).trigger( "test.something" );
});
$( "li" ).hover(
  function() {
    $( this ).append( $( "<span> ***</span>" ) );
  }, function() {
    $( this ).find( "span" ).last().remove();
  }
);
 
$( "li.fade" ).hover(function() {
  $( this ).fadeOut( 100 );
  $( this ).fadeIn( 500 );
});
$( "td" ).hover(
  function() {
    $( this ).addClass( "hover" );
  }, function() {
    $( this ).removeClass( "hover" );
  }
);
	
$( "td" ).off( "mouseenter mouseleave" );