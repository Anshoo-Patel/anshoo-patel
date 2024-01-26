(function ($) {
  $(document).ready(function () {
    // Function to show/hide content based on hash
    function showContent() {
      var region = location.hash.toString() || '#home';
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
    $('#content a').on('click', function (e) {
      e.preventDefault();
      var target = $(this).attr('href');
      location.hash = target;
      showContent();
    });

    // Click event for Home button
    $('.main-menu li:first-child a').on('click', function (e) {
      e.preventDefault();
      location.hash = '#home';
      showContent();
    });
  });
})(jQuery);
