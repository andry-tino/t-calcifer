# t-calcifer (Tutorial)
A tutorial project for building a universal web app with Visual Studio 2015 and Cordova

## About
_Calcifer_ is a tutorial designed to take familiarity with a broad range of technologies:

- Web apps
- Visual Studio 2015
- Cordova
- HTML5, Javascript, CSS

The purpose of it is not getting deep understanding of those technologies, but rather provide a generic overview of what they are and how they can empower a developer to build cool apps for all the stores.

### What will we do?
We are going to build a cross-platform app (an app which is developed in HTML, Javascript and CSS which can be run on Windows phone, Android and iOS).

The app will display a [Bing Map](http://www.microsoft.com/maps/choose-your-bing-maps-API.aspx) and the user will be able to display his current position on it!

### Who is this for?
This tutorial has been designed for very beginners. A very basic knowledge of Javascript is required, however it can be included as part of the experience.

### Requirements
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

Now we can move to the content of our app!

1. Locate tag `<body>`.
2. Append on top the `<div>` element for the top bar: `<div class="bar"></div>`.
3. Add another tag for message panel: <div class="top"></div>`.
4. Add the tag for hosting the map: `<div id="mapDiv" class="map-host"></div>`.

Let's focus of the top bar.

1. In the first `div` we've added, add a tag for the title: `<span class="title">Calcifer</span>`.
2. Now add another `<span>` for the button: `<span id="mylocationButton" class="mylocation">My Location</span>`.

The top bar should look like this:

    <div class="bar">
        <span class="title">Calcifer</span>
        <span id="mylocationButton" class="mylocation">My Location</span>
    </div>

Let's now focus on the message panel.

1. In the second `div` we created, add a `<span>` for the message panel: `<span id="message" class="info">Hello! I am ready!</span>`.

The message bar tag should  look like this:

    <div class="top">
        <span id="message" class="info">Hello! I am ready!</span>
    </div>

We have added `"Hello! I am ready!"` as the initial content to display.

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

We have addedwhat we need in our page.

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
