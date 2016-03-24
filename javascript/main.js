/**
 * Initializing all logic in the page.
 */

var main = function() {
  var _initializeScaleFix = function() {
    scaleFix().initialize();
  };
  
  var _initializeNavigation = function() {
    var sideContent = document.getElementById('sideContent');
  
    var ul = document.getElementsByClassName('table-contents')[0];
    var anchors = ul.getElementsByTagName('a');
    
    for (var i = 0; i < anchors.length; i++) {
      var datahref = anchors[i].getAttribute('data-href');
      if (!datahref) continue;
      
      anchors[i].addEventListener('click', function(e) {
        sideManager().loadPage(datahref, function(e) {
          // Argument `e` contains fetched data
          sideContent.innerHTML = e.content;
        });
      });
    }
  };
  
  var _initialize = function() {
    _initializeScaleFix();
    _initializeNavigation();
  };
  
  return {
    initialize: _initialize
  };
};

// Initializing
(function() {
  window.addEventListener('load', function(e) {
    main().initialize();
  });
})();
