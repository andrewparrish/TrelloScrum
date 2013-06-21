// Saves options to localStorage.
function save_options() {
	var badgeCheck = $('#badges');
	var useBadges = badgeCheck.is(':checked');
	localStorage['useBadges'] = useBadges;

	// Update status to let user know options were saved.
	var status = $('#status');
	status.text('Options Saved.');
	setTimeout(function() {
		status.text('');
	}, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
	var useBadges = localStorage['useBadges'];
	if (useBadges !== false && useBadges !== 'false') {
		$('#badges')[0].checked = true;
	}
	else {
		$('#badges')[0].checked = false;
	}
}

$(function(){
	restore_options();
	$('#save').bind('click', save_options);
});
