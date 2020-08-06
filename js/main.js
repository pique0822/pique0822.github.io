var pages = {
	'Home':{
		'color':'#3498db',
		'title':"About Me",
		'subtitle':'Get to know a little bit about me and my interests.',
		'main':"Welcome to my website - I've recently graduated from my Master's of Engineering in Computer Science from MIT, focusing in Artificial Intelligence / Machine Learning. In recent years, my interests have been in Natural Language Processing, Automatic Speech Recognition, and Computational Psycholinguistics. <br/><br/> Some interesting facts about me:<ul><li>My favorite authors are Dan Brown (I would highly recommend <i>Digital Fortress</i> or <i>Origins</i>) and Kurt Vonnegut (<i>Player Piano</i> is a must read)</li><li>I am bilingual, fluent in Spanish and Engilsh but want to learn German!</li><li>My favorite work of art is <i>Guernica</i> by Pablo Picasso.</li><ul>"
	},
	'Resume':{
		'color':'#9b59b6',
		'title':"Resume",
		'main':'<iframe src="mdelrioresume.pdf" style="width:100%; height: 100% !important;"></iframe>'
	},
	'Publications':{
		'color':'#27ae60',
		'title':"Publications",
		'main':"<span style='text-align:center; font-weight:bold; font-size:1.25em;'>2020</span><br/>Jonathan Mamou, Hang T. T. Le, Miguel del Rio, Cory Stephenson, Hanlin Tang, Yoon YoungKim, and SueYeon Chung. Emergence of separable manifolds in deep language representations. ICML, 2020. <a class='links' href='https://arxiv.org/abs/2006.01095'>https://arxiv.org/abs/2006.01095</a>."
	},
	'Projects':{
		'color':'#e74c3c',
		'title':"Projects"
	}
};


$(document).ready(function() {
	var cw = $('#profile-picture').width();
	$('#profile-picture').css({'height':cw+'px'});

	updatePage();
});

function updatePage(){
	vardef = pages[$('.selected').text()];

	// Title
	if("title" in vardef){
		$('.content-title').html(vardef['title']);
	} else {
		$('.content-title').html($('.selected').text());
	}

	// Subtitle
	if("subtitle" in vardef){
		$('.content-subtitle').html(vardef['subtitle']);
	} else {
		$('.content-subtitle').html('-');
	}

	// Main text
	if("main" in vardef){
		$('.content-main').css('font-style','normal');
		$('.content-main').html(vardef['main']);
	} else {
		$('.content-main').css('font-style','italic');
		$('.content-main').html('Nothing here at the moment');
	}

	// Update the Color based on the page
	if("color" in vardef){
		$('.selected').css('color',vardef['color']);
		$('#profile-picture').css('box-shadow','0px 0px 5px 5px '+vardef['color']);
		$('a').css('color', vardef['color']);
	}
}

function selectThis(name){
	if($('.selected').text() != name)
	{
		vardef = pages[name];
		$('.selected').css('color','white');
		$('.selected').removeClass('selected');
		$('#'+name).addClass('selected');
		updatePage();
	}
}
