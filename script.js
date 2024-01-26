// Wait for the document to load before running the script 
$(document).ready(function () {
  // Show the Home section on page load
  $('#home').show();

  // Click event for navigation links
  $('.main-menu a').on('click', function (e) {
    e.preventDefault();
    var target = $(this).attr('href');

    // Remove and add 'active' class for navigation links
    $('.main-menu a').removeClass('active');
    $(this).addClass('active');

    // Show the targeted section
    $('.content-region').hide();
    $(target).removeClass('hide').show(); // Ensure the 'hide' class is removed

    // Additional code to handle scroll to the top if needed
    if (target === '#home') {
      $('html, body').animate({ scrollTop: 0 }, 'fast');
    }
  });
});
