// Show and hide text from box
$('.show-lafete').on('mouseover', function(event) {
  var target = event.currentTarget.getAttribute('data-active-box');
  $('.' + target).addClass('magic-box-show');
})

$('.show-lafete').on('mouseleave', function(event) {
  var target = event.currentTarget.getAttribute('data-active-box');
  $('.' + target).removeClass('magic-box-show');
})

// Change page
$('.magic-box-img').on('click', function(event) {
  $('.home').removeClass('show');
  $('.home').addClass('not-show');
  $('.desayunos').removeClass('not-show');
  $('.desayunos').addClass('show');
})
