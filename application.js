$(document).ready(function(){
 $('.delete').mousedown(function() {
 	$(this).parent().hide();
 });
  $('.purchase').mousedown(function() {
 	$(this).parent().toggleClass('bought need');
 });
  $('.add').mousedown(function() {
  	var newItem = document.getElementbyID("addItems").val();
  	$('#list').append(newItem);
  });
});