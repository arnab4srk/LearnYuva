$(document).ready(function () 
{
    $("#login").click(function()
    {
        $('#loginModal').modal('show');
        $('.container' ).addClass('blur' );
    });
    $(".close").click(function()
    {
        $("#loginModal").modal('hide');
        $('.cont' ).removeClass('blur' );
    });
});


/*
$('#btn').click(function() {
   $('#modelWindow').modal('show');
});*/
