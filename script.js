// Wait for the document to load before running the script 
$(document).ready(function () {
  // Show the Home section on page load
  $('#home').show();

  // Click event for navigation links
  $('.main-menu a').on('click', function (e) {
    e.preventDefault();
    var target = $(this).attr('href');

    // Hide all content regions
    $('.content-region').hide();

    // Show the clicked content region
    $(target).show();

    // Remove and add 'active' class for navigation links
    $('.main-menu a').removeClass('active');
    $(this).addClass('active');
  });
});
