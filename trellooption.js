Trello.setKey("8a2059579ca236994f1946458729f2f2");

$(function(){
	$('#authorizebutton').bind('click', authorize_trello);
});

Trello.authorize({
	interactive: false,
	success: authorize
});

function authorize_trello(){
	//if (('#autoAssign')[0].checked == true){
		Trello.authorize({
			success: authorize
		})
	//}else{
	//	$('#loggedin').empty();
	//	$('#loggedin').append("<p>You need to choose to use auto-assign before authenticating!<p>");
	//}
}
var authorize = function(){
	$('#loggedin').empty();
	Trello.members.get("me",function(member){
		updateAuth();
		$('#loggedin').append("<p>Successfully Authorized with Trello!</p>")
	});
}

$('#logoutbutton').click(logout);

var logout = function(){
	Trello.deauthorize();
	updateLoggedIn();
}