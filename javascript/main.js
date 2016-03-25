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
      (function() { // Variable in scope for closure
        var datahref = anchors[i].getAttribute('data-href');
        if (!datahref) return;
        
        anchors[i].addEventListener('click', function(e) {
          sideManager().loadPage(datahref, function(e) {
            // Argument `e` contains fetched data
            // Placing content
            sideContent.innerHTML = e.content;
            
            // Causing the page to scroll up
            document.body.scrollTop = 0;
          });
        });
      })();
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
