(function($) {

$('math').length && !(function() {
  // Test for MathML support
  var $div = $('<div class="offscreen"><math xmlns="http://www.w3.org/1998/Math/MathML"><mspace height="23px" width="77px"/></math></div>').appendTo(document.body);
  var box = $div.get(0).firstChild.getBoundingClientRect();
  console.log("box.height = " + box.height)
  console.log("box.width = " + box.width)
  return Math.abs(box.height - 23) <= 1 && Math.abs(box.width - 77) <= 1;
})() && (function() {

  // Add CSS fallback
  $('<link href="/media/css/libs/mathml.css" rel="stylesheet" type="text/css" />').appendTo(document.head);

  // Add notification
  $('#wikiArticle').prepend('<div class="notice"><p>Your browser does not seem to support MathML. Some CSS fallback will be used instead, but the mathematics on this page might not render correctly.</p></div>');
})();

})(jQuery);
