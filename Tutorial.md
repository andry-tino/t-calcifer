# Building a cross-platform app
A tutorial project for building a universal web app with Visual Studio 2015 and Cordova

## Requirements
For this tutorial you are going to need:

1. [Microsoft Visual Studio 2015 Community Edition](https://www.visualstudio.com/en-us/downloads/download-visual-studio-vs.aspx)
2. A Windows Phone, or an Android phone

**Important:** Installation is not covered by this tutorial.

## Initial setup and project configuration
We start by creating a new _Cordova project_ in Visual Studio.

![New project on Visual Studio](/_items/vsnewproject.png)

We can skip creating a folder for solution. So we now have a solution that we can use to build our app using HTML5, Javascript and CSS.

### Installing Cordova's Geolocation plug-in
The next step is installing the [Geolocation plugin](https://github.com/apache/cordova-plugin-geolocation) in our project. That is necessary because we want to use device's location API in order to get the position and show it on the map.

1. In your project, open file `config.xml`.
2. Select _Plugins_ in the left-most pane.
3. Selct _Core_ in the next pane's top area.
4. Select _Geolocation_ in the list of plugins.
5. Click on _Add_.

![Cordova Geolocation plugin](/_items/geolocation.png)

The process might take a while. After that the plugin should be marked as installed in the list.

## Setting pages and layouts
We now move forward to creating some layout structures. I this process our goal is to create the elements of the UI (User Interface) of our app.

1. In the _Solution Explorer_ pane, open file `index.html` under folder `www`.

When the file opens, you get access to the HTML code. This is our page, the entry point of our app. Once the user starts the app, he will see this. 

How does the app look like at the moment? It is easy to see! Since we are basically developing a web application, just do the following:

1. Right click on the page tab in Visual Studio.
2. Select _Open Containing Folder_.
3. The directory containing `index.html` is displayed.
4. Double click on `index.html` and open it with your favorite browser.
5. Resize the browser window in order to resemble the size of a phone in portrait mode.

This is how the app looks like at the moment! There is just a text prefilled by Visual Studio as an initial content. 

### Designing the page structure
Let's add some parts to our page. We want the interface to look like the following:

![Wireframes for our app](/_items/wireframes.png)

The diagram above is a schematic representation of how our app will be. Of course it will not look like exactly like that. We will make it way cooler, but the picture shows us the components we want:

- A top bar to place the title of our app.
- A title element.
- A button element the user can use to request his location.
- An information panel to display some informational text.
- A panel hosting our map.

What we;ve done so far is called _Designing_. Design happens before starting writing code and it is very important. It is the time where we set our objectives and draw the app to understand what we want it to look like.

### Defining components in our app
We can now start coding! The first thing we do is setting the title of our page. 

1. Locate, in `index.html`, the `<title>` tag which resides into the `<head>` element. This tag contains a text which we want change. 
2. Type in the tag the name of your app.

The tag should look like this:

    <title>calcifer (Tutorial)</title>

This title **will NOT be displayed**! Remember that everything that gets displayed reside into the `<body>` tag! In the `<head>` tag we have the settings of our app!

#### Creating the main parts
Now we can move to the content of our app!

1. Locate tag `<body>`.
2. Append on top the `<div>` element for the top bar: `<div class="bar"></div>`.
3. Add another tag for message panel: `<div class="top"></div>`.
4. Add the tag for hosting the map: `<div id="mapDiv" class="map-host"></div>`.

#### Focusing on the top bar

1. In the first `div` we've added, add a tag for the title: `<span class="title">Calcifer</span>`.
2. Now add another `<span>` for the button: `<span id="mylocationButton" class="mylocation">My Location</span>`.

The top bar should look like this:

    <div class="bar">
        <span class="title">Calcifer</span>
        <span id="mylocationButton" class="mylocation">My Location</span>
    </div>

#### Focusing on the message panel

1. In the second `div` we created, add a `<span>` for the message panel: `<span id="message" class="info">Hello! I am ready!</span>`.

The message bar tag should  look like this:

    <div class="top">
        <span id="message" class="info">Hello! I am ready!</span>
    </div>

We have added `"Hello! I am ready!"` as the initial content to display.

#### Finalizing

The `<body>` should now look like this:

    <body>
        <div class="bar">
            <span class="title">Calcifer</span>
            <span class="titlemini">Ca</span>
            <span id="mylocationButton" class="mylocation">My Location</span>
        </div>
    
        <div class="top">
            <span id="message" class="info">Hello! I am ready!</span>
        </div>
    
        <div id="mapDiv" class="map-host"></div>
        ...
    </body>

The 3 elements we have introduced are what we need. If you refresh `index.html` in your browser, you will see that the page looks terrible! That's because we need to add styles. But that is not something HTML is responsible for, we need CSS!

### Styling page parts
Let's create a new file called `style.css` into `www/css`.

1. Right click on the `css` folder in the _Solution Explorer_ and select _Add_ and then _New Item..._.
2. Select _Style Sheet_ as file type and name it: `index.css`.

`index.css` is the strylesheet for our app. But we need to include it in `index.hmtl` otherwise the style we will code will not be applied to the page. So open `index.html` and locate the title the `<head>` section:

    <title>calcifer (Tutorial)</title>

Just below it add the following line of markup:

    <link href="css/index.css" rel="stylesheet" />
    
The line before tells the browser that pur page needs a style and that style is located at the specified path in attribute `href`.

#### Defining styles
Let's get back to `index.css` and add some selectors ad styling rules. With CSS you can specify which HTML tags you want a style to be applied to. These are called _selectors_. Inside a selector we write rules which will specify how an HTML element will look like.

The first thing we do, is defining styles for the elements we have defined in `index.html` by creating a correspondance with attribute `class` in every tag:

    body {}
    
    .bar {}
    .top {}
    .map-host {}
    .title {}
    .mylocation {}
    .mylocation {}
    .info {}

Inside those selectors we are going to insert styling rules in order to make our app look better. The first style we apply is to the bosy of the page in order to remove any spacing between the page borders and the content we are going to create. We do this by removing padding and margin:

    body {
      margin: 0;
      padding: 0;
    }

#### The top bar
Let's focus on the top bar and let's make it look dark grey. We also want it to be on the top of the page and occupy the whole width of the screen.

    .bar {
      background-color: #464646;    /* A dark grey */
      position: absolute;           /* Position from the page's top-left corner */
      top: 0;                       /* Position it right on top */
      width: 100%;                  /* Occupy all page's width */
      height: 50px;                 /* We want the bar to be 50 pixel tall */
    }

The text between `/*` and `*/` are comments which you can avoid typing! Try to refresh `index.html` and you will see the grey bar on top.

#### The info panel
The info panel is the next element we focus on. The panel should:

- Appear right below the top bar.
- Take all page's width like the top bar.
- Be yellow and transparent so that the map, which will show below, can be seen through.

In CSS it means the following:

    .top {
      position: absolute;                         /* Position from the page's top-left corner */
      top: 50px;                                  /* Below the top bar, shoft down by the top bar's height */
      width: 100%;                                /* Take all width */
      background-color: rgba(255, 185, 0, 0.85);  /* Yellow + 85% transparent */
    }

#### The map host
We now move to the last component: the one which will host the map. Those are the specifications:

- We want the map to take all the app's size.

Not much of a requirement after all, it is actually very easy to translate this into CSS:

    .map-host {
      position: absolute;         /* Position from the page's top-left corner */
      top: 0;                     /* Position it right on top */
      width: 100%;                /* Occupy all page's width */
      height: 100%;               /* Occupy all page's height */
      background-color: #efefef;  /* Just a random light color to see the element */
    }

As you noticed we also have applied a background color. That is why we want to see the map host. This is just for testing. The point is that, if we do not apply a color, we will never get a general idea of how the app will look like. That happens because we still need to load the Bing map, but this is something we'll do later. For now we want to concentrate on styling our app, thus we use a color for the map host to see what we will get once the map will be loaded there.

### From the first iteration to the second
How does it look like now? Try refreshing `index.html`! It is a mess! Yes because we need to tune a little bit more our styling.

The real problem is that we need to tell the browser that the 3 parts we have defined should appear one on top of each other. In particular we need the following:

1. The map should be shown first.
2. The top bar should be shown on top of the map.
3. The info panel should be shown also on top of the map.

Note that the top bar and the info panel do not overlap each other because we specified, on the info panel, an absolute vertical cooridnate of 50 pixels: `top: 50px`, which is exactly the height of the top bar. We can specify a depth order by means of CSS rule `z-order`:

    .bar {
      ...
      z-index: 2;
    }
    .top {
      ...
      z-index: 2;
    }
    .map-host {
      ...
      z-index: 1;
    }

The map host will be the lowest layer, while the info panel and the top bar will be sitting on top on the same layer.

Let's refresh now. Well it looks a bit better and the parts are getting their correct positions in the general layout.

## Adding the map
The layout is basically done in its most foundamental parts. Now we want to add the map. This tutorial will not focus on how to get the key required for using the Bing Maps API. So I am assuming you already have activated your Live account to use Bing Maps and that you have succeeded into getting a development key.

The key you get is an alphanumeric string and has the following shape:

    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-xxxxx

**Important!** The key is secret, so do not share it or expose it!

### Creating the map handling file
We need to create a Javascript file that will contain all the code to create the map and work with it.

1. Right click on the `scripts` folder in the _Solution Explorer_ and select _Add_ and then _New Item..._.
2. Select _JavaScript File_ as file type and name it: `map.js`.

Before writing all the logic we need, let us forst include this file into our page.

1. Go back to `index.html`.
2. Locate the `<body>` element and locate the closing tag: `</body>`.
3. Just before the closing tag `</body>`, add the following line of code:


    <script src="scripts/map.js"></script>
    
Your `<body>` should look like the following:

    <body>
        <div class="bar">
            <span class="title">Calcifer</span>
            <span id="mylocationButton" class="mylocation">My Location</span>
        </div>
        <div class="top">
            <span id="message" class="info">Hello! I am ready!</span>
        </div>
        <div id="mapDiv" class="map-host"></div>
    
        <script src="cordova.js"></script>
        <script src="scripts/platformOverrides.js"></script>
        <script src="scripts/index.js"></script>
        <script src="scripts/map.js"></script>
    </body>

Save everything and go back to `map.js`.

### Showing the map
Now we are ready to create the Bing map. In `map.js` write the following:

    (function () {
      "use strict";
  
      window.addEventListener('load', function() {
        initializeMap();
      }, false);
  
      var initializeMap = function() {
        map = new Microsoft.Maps.Map(
          document.getElementById('mapDiv'),
          {
            credentials: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-xxxxx",    /* Replace this string with your Bing maps key here */
            center: new Microsoft.Maps.Location(45.5, -122.5),    /* Redmond! */
            mapTypeId: Microsoft.Maps.MapTypeId.road,             /* Display roads */
            zoom: 7,                                              /* Zoom level: town */
            showScalebar: false,                                  /* Do not show controls */
            showMapTypeSelector: false,                           /* Do not show selectors */
            showDashboard: false,                                 /* Do not show the dashboard */
            enableSearchLogo : false                              /* Do not show the search bar */
          }
        );
      };
    })();

This piece of code creates a structure which calls function `initializeMap` as soon as the page has loaded and we get access to its elements.

We do not need anything more. Try refreshing `index.html` after saving everything and you should see the map underneath the top bar and the info panel.

## Adding logic
We now need to have this this working.

### A bit about the algorithm
This is the algorithm.

![Requesting location](/_items/map1.png)

And this is the rest

![Getting location](/_items/map2.png)

Funny stuff

## What we have learnt
TODO
