$(document).ready(function(){
 $('.delete').mousedown(function() {
 	$(this).parent().hide();
 });
  $('.purchase').mousedown(function() {
 	$(this).parent().toggleClass('bought need');
 });
});