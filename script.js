// Wait for the document to load before running the script 
$(document).ready(function () {
  // Show the Home section on page load
  $('#home').show();

  // Click event for navigation links
  $('.main-menu a').on('click', function (e) {
    e.preventDefault();
    
    // Get the target section from the href attribute
    var target = $(this).attr('href');

    // Remove and add 'active' class for navigation links
    $('.main-menu a').removeClass('active');
    $(this).addClass('active');

    // Show the targeted section and hide others
    $('.content-region').hide();
    $(target).show();
  });
});
