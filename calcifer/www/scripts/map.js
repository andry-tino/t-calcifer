/**
 * map.js
 * Andrea Tino - 2015
 */

// Map handling
(function () {
    "use strict";

    // This will host the map object
    var map = null;
    // This will tell us if we have access to location
    var locationAvailable = false;
    // This will tell us when the system is busy retrieving location and we cannot perform other things
    var busy = false;

    var clearMap = function () {
        // Clear everything
        map.entities.clear();
    };

    // Radius is expressed in km
    var drawCircle = function (radius, latitude, longitude) {
        var backgroundColor = new Microsoft.Maps.Color(10, 100, 0, 0);
        var borderColor = new Microsoft.Maps.Color(150, 200, 0, 0);

        var R = 6371; // Earth's mean radius in km
        var lat = (latitude * Math.PI) / 180;
        var lon = (longitude * Math.PI) / 180;
        var d = parseFloat(radius) / R;
        var circlePoints = new Array();

        for (var x = 0; x <= 360; x += 5) {
            var p2 = new Microsoft.Maps.Location(0, 0);
            var brng = x * Math.PI / 180;
            p2.latitude = Math.asin(Math.sin(lat) * Math.cos(d) + Math.cos(lat) * Math.sin(d) * Math.cos(brng));

            p2.longitude = ((lon + Math.atan2(Math.sin(brng) * Math.sin(d) * Math.cos(lat),
                             Math.cos(d) - Math.sin(lat) * Math.sin(p2.latitude))) * 180) / Math.PI;
            p2.latitude = (p2.latitude * 180) / Math.PI;
            circlePoints.push(p2);
        }

        var polygon = new Microsoft.Maps.Polygon(circlePoints, { fillColor: backgroundColor, strokeColor: borderColor, strokeThickness: 1 });

        map.entities.push(polygon);
    };

    // Accuracy is expressed in meters
    var drawPin = function (latitude, longitude, accuracy) {
        // Draw pin
        var point = new Microsoft.Maps.Location(latitude, longitude);
        var pin = new Microsoft.Maps.Pushpin(point, { typeName: 'pin' });
        clearMap();
        map.entities.push(pin);

        // Draw accuracy circle
        drawCircle(accuracy / 1000, latitude, longitude);

        // Centering map on pin
        map.setView({ zoom: 16, center: point });
    };

    var initializeMap = function() {
        map = new Microsoft.Maps.Map(
            document.getElementById('mapDiv'),
            {
                credentials: "ArzkZ2pZslqT62hiKsqZ51c7qRjySokqJAUOG084nrZHSHXBESaOpN9631-9j6lo", /* Replace this string with your Bing maps key here */
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

    var initializeLocationAvailability = function() {
        locationAvailable = window.navigator && window.navigator.geolocation;
    };

    var initializeInteractions = function () {
        var button = document.getElementById('mylocationButton');
        button.addEventListener('click', function () {
            var message = document.getElementById('message');

            // Are we busy?
            if (busy) {
                message.textContent = 'Still working on it! Be patient...';
                return;
            }

            // If location is not available, display error message
            if (!locationAvailable) {
                message.textContent = 'Location not available on this device!';
                return;
            }

            // Displaying waiting message
            message.textContent = 'Working on it...';
            // From now on we are busy
            busy = true;

            // Get position
            window.navigator.geolocation.getCurrentPosition(
                function (position) {
                    if (!position.coords) {
                        message.textContent = 'Wrong coordinates';
                        return;
                    }

                    // Adding pin
                    drawPin(position.coords.latitude, position.coords.longitude, position.coords.accuracy);

                    // Displaying message
                    var displayLatitude = ('LT' + position.coords.latitude).substring(0, 10);
                    var displayLongitude = ('LG' + position.coords.longitude).substring(0, 10);
                    message.textContent = 'Your position: ' + displayLatitude + ' ' + displayLongitude;

                    // No more busy
                    busy = false;
                },
                function (error) {
                    message.textContent = 'An error occurred while retrieving your position!';

                    // No more busy
                    busy = false;
                }
            );
        }, false);
    };

    // Initializing
    window.addEventListener('load', function () {
        initializeMap();
        initializeInteractions();
        initializeLocationAvailability();
    }, false);
})();