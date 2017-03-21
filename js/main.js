
//https://learn.jquery.com/using-jquery-core/document-ready/
// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "Dom is ready!" );

    $('#carousel-example-generic').on('slid.bs.carousel', function (event) {
        // This event is fired when the carousel has completed its slide transition.
        console.log('hello');

    });

    $('#carousel-example-generic').on('slide.bs.carousel', function (event) {
        // This event fires immediately when the slide instance method is invoked.
        console.log('goodbye');
    });
});