const SELECTED_PAGE = 'selectedPage';
const DEFAULT_PAGE = 'Home';

$(document).ready(function() {
	var cw = $('#profile-picture').width();
	$('#profile-picture').css({'height':cw+'px'});

	updatePage();
});

function getJSON(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

function updatePage(){
	selectedName = localStorage.getItem(SELECTED_PAGE);
	if (selectedName == null) {
		selectedName = DEFAULT_PAGE;
	}
	getJSON("https://pique0822.github.io/jsons/" + selectedName +".json",
	function(err, vardef){
		$('#' + selectedName).addClass('selected');
		// Title
		if(!(vardef['title'] === undefined)){
			$('.content-title').html(vardef['title']);
		} else {
			$('.content-title').html($('.selected').text());
		}

		// Subtitle
		if(!(vardef['subtitle'] === undefined)){
			$('.content-subtitle').html(vardef['subtitle']);
		} else {
			$('.content-subtitle').html('-');
		}

		// Main text
		if(!(vardef['main'] === undefined)){
			$('.content-main').css('font-style','normal');
			$('.content-main').html(vardef['main']);
		} else {
			$('.content-main').css('font-style','italic');
			$('.content-main').html('Nothing here at the moment');
		}

		// Update the Color based on the page
		if(!(vardef['color'] === undefined)){
			$('.selected').css('color',vardef['color']);
			$('.content-title').css('color',vardef['color']);
			$('#profile-picture').css('box-shadow','0px 0px 5px 5px '+vardef['color']);
			$('a').css('color', vardef['color']);
			$('#at').css('color', vardef['color']);
			$('#myName').css('color', vardef['color']);
		}
	});
}

function selectThis(name){
	if($('.selected').text() != name)
	{
		$('.selected').css('color','white');
		$('.selected').removeClass('selected');

		localStorage.setItem(SELECTED_PAGE, name);
		updatePage();
	}
}
