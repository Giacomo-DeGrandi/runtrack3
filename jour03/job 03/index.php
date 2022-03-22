<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>imp</title>
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="script.js"></script>
    <style>
        * { font-family: Verdana, sans-serif;}
        main { display:flex;flex-direction:column;align-items:center; }
        #mydiv { display:flex;flex-direction:column;align-items:center; }
        .row { display:flex;flex-direction:row;align-items:center; }
        .imgwrapper {  border:solid 3px gold;}
        img { height:200px;width:200px; }
        #emptydiv { height:200px;width:200px; }
    </style>
</head>
<body>
<main>
    <div id="mydiv">
        <div class="row">
            <div class="imgwrapper"><img src="images/1.PNG" alt="1"></div>
            <div class="imgwrapper"><img src="images/2.PNG" alt="2"></div>
            <div class="imgwrapper"><img src="images/3.PNG" alt="3"></div>
        </div>
        <div class="row">
            <div class="imgwrapper"><img src="images/4.PNG" alt="4"></div>
            <div class="imgwrapper"><img src="images/5.PNG" alt="5"></div>
            <div class="imgwrapper"><img src="images/6.PNG" alt="6"></div>
        </div>
        <div class="row">
            <div class="imgwrapper"><img src="images/7.PNG" alt="7"></div>
            <div class="imgwrapper"><img src="images/8.PNG" alt="8"></div>
            <div class="imgwrapper"><div id="emptydiv"></div></div>
        </div>
    </div>
</main>
</body>
</html>
