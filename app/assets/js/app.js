var myProfile = (function() {
  'use strict'

  var init = (function() {
    openNav();
    activeNav();
  });

  var _choice   = $('.js-choice');
  var _listMenu = $('.menu-item');
  var _menuItem = $('.js-item');

  var openNav = (function() {
    _choice.on('click', function() {
      _listMenu.toggleClass('open');
    });
  });

  var activeNav = (function() {
    _menuItem.on('click', function() {
      _menuItem.removeClass('active');
      $(this).addClass('active');

      if( $(this).find('active')) {
        _listMenu.removeClass('open');
      }
    });
  });

  return {
    init: init
  };
})(window);

$(document).ready(function() {
  'use strict'
  myProfile.init();
});
