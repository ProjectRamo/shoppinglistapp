

$('form').submit(function(event){
	event.preventDefault();
    var $delbutton = $('<li><button class="delbutton">x</button><br></li>');
    var $listitem = $('<div class="wholeitem"></div>')
    var $donebutton = $('<li><button class="classdonebutton">' + $('#itemname').val() + '</button></li>');
    var $itemname = $('<li>'+ $('#itemname').val() + '</li>');
    var $nameday = $('<li>yourname</li><li>datetoday</li>');
    var $undobutton = $('<li><button class="undobutton">^</button><br></li>');
    var $doneitem = $('<span class="added"></span>');
    //var $doneitem = $('<div></div>');
    $listitem.append($donebutton);
    $listitem.append($nameday);
    $listitem.append($delbutton);
	$('#tbdlist').append($listitem);
	$('input').val('');
    $('#tbdlist').on('click', '.classdonebutton', function(e) {
        var $localitem = $(e.target).closest('.wholeitem');
        $("#donelist").append($localitem);
        debugger;
        //$localitem.remove();
    });
    $delbutton.click(function() {
        $listitem.remove();
    });
    $('#donelist').on('click', '.classdonebutton', function(e){
        var $localdoneitem = $(e.target).closest('.wholeitem');
        $('#tbdlist').append($localdoneitem); 
        //$localdoneitem.remove();       
    });

});

function archive() {
    $('#donelist .added').remove();
}

$(document).ready(function(){

	alert("its on");

});

/* Jquery load test
window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
}
*/