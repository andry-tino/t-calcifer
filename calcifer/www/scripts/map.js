/**
 * map.js
 * Andrea Tino - 2015
 */

// Map handling
(function () {
    window.addEventListener('load', initializeMap, false);

    function initializeMap() {
        var map = new Microsoft.Maps.Map(
            document.getElementById('mapDiv'),
            {
                credentials: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-xxxxx", /* Replace this string with your Bing maps key here */
                center: new Microsoft.Maps.Location(45.5, -122.5),
                mapTypeId: Microsoft.Maps.MapTypeId.road,
                zoom: 7,
                showScalebar: false,
                showMapTypeSelector: false,
                showDashboard: false,
                enableSearchLogo : false
            }
        );
    };
})();