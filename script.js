// Wait for the document to load before running the script 
$(document).ready(function () {
  // Function to show/hide content based on hash
  function showContent() {
    var region = location.hash || '#home';
    $('.content-region').hide();
    $(region).show();
    $('.main-menu a').removeClass('active');
    $('.main-menu a[href="' + region + '"]').addClass('active');
  }

  // Show content on page load and hashchange
  $(window).on('load hashchange', function () {
    showContent();
  });

  // Click event for navigation links
  $('.main-menu a').on('click', function (e) {
    e.preventDefault();
    var target = $(this).attr('href');

    // Handle special case for the Home link
    if (target === '#home') {
      target = 'index.html';
    }

    location.hash = target;
    showContent();
  });
});
