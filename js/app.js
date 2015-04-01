
$('form').submit(function(event){
	event.preventDefault();
    var $delbutton = $('<li><button class="delbutton">x</button><br></li>');
    var $listitem = $('<div></div>')
    var $donebutton = $('<li><button class="donebutton">' + $('#itemname').val() + '</button></li>');
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
    $donebutton.click(function() {
        $doneitem.append($itemname);
        $doneitem.append($nameday);
        $doneitem.append($undobutton);
        $("#donelist").append($doneitem);
        $listitem.remove();
    });
    $delbutton.click(function() {
        $listitem.remove();
    });
    $undobutton.click(function(){
    //var $delbutton = $('<li><button class="delbutton">x</button><br></li>');
    //var $donebutton = $('<li><button class="donebutton">' + $('#itemname').val() + '</button></li>');
    var $nameday = $('<li>yourname</li><li>datetoday</li>');
        $listitem = $('<div></div>')
        $listitem.append($donebutton);
        $listitem.append($nameday);
        $listitem.append($delbutton);
        $('#tbdlist').append($listitem); 
        $doneitem.remove();       
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