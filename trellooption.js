Trello.authorize({
	interactive: false,
	success: onAuthorize
});

$('#authorizebutton').click(function(){
	if ('#autoAssign').is(':checked')) {
		Trello.authorize({
			success: onAuthorize
		})
	}else{
		('#loggedin').append("You need to choose to use auto-assign before authenticating!");
	}
}
var authorize = function() {
	$('#loggedin').empty();
	Trello.members.get("me",function(member){
		updateAuth();
		$('#loggedin').append("Successfully Authorized with Trello!")
	});
}

$('#logoutbutton').click(logout);

var logout = function(){
	Trello.deauthorize();
	updateLoggedIn();
}