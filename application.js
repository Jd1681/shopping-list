$(document).ready(function(){
 $('.delete').mousedown(function() {
 	$(this).parent().remove();
 });
  $('.purchase').mousedown(function() {
 	$(this).parent().toggleClass('bought need');
 });
  $('.add').mousedown(function(){
	var addthisItem = $("#addItems").val();
	$("#list").append("<div class='items need'>" + addthisItem + "<div class='purchase'></div><div class='delete'>-</div></div>");
	});
});