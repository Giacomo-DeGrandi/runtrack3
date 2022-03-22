$(document).ready( function (){

    $('#mydiv').append($('<div>',{id:'row1'}))
    $('#row1').insertAfter($('#row1'))
    $('#mydiv').append($('<img>',{id:'img2',src:'images/2.PNG'}))
    $('#mydiv').append($('<img>',{id:'img3',src:'images/3.PNG'}))
    $('#mydiv').append($('<br>'))
    $('#mydiv').append($('<img>',{id:'img4',src:'images/4.PNG'}))
    $('#mydiv').append($('<img>',{id:'img5',src:'images/5.PNG'}))
    $('#mydiv').append($('<img>',{id:'img6',src:'images/6.PNG'}))
    $('#mydiv').append($('<br>'))
    $('#mydiv').append($('<img>',{id:'img7',src:'images/7.PNG'}))
    $('#mydiv').append($('<img>',{id:'img8',src:'images/8.PNG'}))
    $('#mydiv').append($('<img>',{id:'img9',src:'images/9.PNG'}))



})