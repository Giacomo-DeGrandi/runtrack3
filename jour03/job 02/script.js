

$(document).ready(function(){

    var myBtn = $("button")

    // if u click on melanger mix the picture in the other div
    myBtn.on('click',function (){

        $('h1').text("")

        //get the leghtn of image table
        var myImgsCount = $("#rangees > img").length

        //get the images themselves
        var myImgs = $("#rangees > img")

        // initialise my vars to loop
        var j = 0
        var tmp;

        // Fisher-Yats Shuffle algo
        while(myImgsCount--){

            // generate random index and round it as default
            j = Math.floor(Math.random() * (myImgsCount));

            // swap the indexes
            tmp = myImgs[myImgsCount]


            myImgs[myImgsCount] = myImgs[j]
            myImgs[j] = tmp // <-- the swap

        }

        // place them in the the #melangees div
        myImgs.detach().appendTo('#melangees')
    })

    // now the idea is, if u click pics on the right sequence
    // it will rebuild the picture correctly. To be able to check
    // identify the order we will use the alt of img to select them
    // if the order is equal to our check array you win
    // otherwise it will reorder randomly the pics in the sub
    // div container (#rangees)

        // my test array for win
        var testarr = [1,2,3,4,5,6]
        // my stack to compare to test
        var myTab = []

    // winning test function
    function test (tableaux,longueur,testarr){
        if (longueur === 6) {
            for(i=0;i<6;i++){
                if(tableaux[i] === testarr[i]){
                    $('h1').text("🏆🏆🏆 Vous avez gagné 🏆🏆🏆")
                    var end = true;
                } else {
                    $('h1').text("😞😞😞 Vous avez perdu 😞😞😞")
                    var end = true;
                }
            }
            if(end){
                myTab = []
            }
        }
    }


    // my imgs as vars
    var $image1 = $("img[alt='1']")
    var $image2 = $("img[alt='2']")
    var $image3 = $("img[alt='3']")
    var $image4 = $("img[alt='4']")
    var $image5 = $("img[alt='5']")
    var $image6 = $("img[alt='6']")


    // if u click on the picture reorder them in the div below
    $image1.on('click', function () {
        $image1.detach().appendTo('#rangees')
        myTab.push(1)
        test(myTab,myTab.length,testarr)
    })
    $image2.on('click', function () {
        $image2.detach().appendTo('#rangees')
        myTab.push(2)
        test(myTab,myTab.length,testarr)
    })
    $image3.on('click', function () {
        $image3.detach().appendTo('#rangees')
        myTab.push(3)
        test(myTab,myTab.length,testarr)
    })
    $image4.on('click', function () {
        $image4.detach().appendTo('#rangees')
        myTab.push(4)
        test(myTab,myTab.length,testarr)
    })
    $image5.on('click', function () {
        $image5.detach().appendTo('#rangees')
        myTab.push(5)
        test(myTab,myTab.length,testarr)
    })
    $image6.on('click', function () {
        $image6.detach().appendTo('#rangees')
        myTab.push(6)
        test(myTab,myTab.length,testarr)
    })



})





/*

    // if u click on the picture reorder them in the div below


       // init counter
        var mycount = 0

    // my move on click function
    function move(el,counter,tableaux,longueur,testarr) {
        el.detach().appendTo('#rangees')
        myTab.push(counter)
        test(tableaux,longueur,testarr)
    }

       // if u click on the picture reorder them in the div below
    $image1.on('click', function () {move($image1,counter++,myTab,myTab.length,testarr)})
    $image2.on('click', function () {move($image2,counter++,myTab,myTab.length,testarr)})
    $image3.on('click', function () {move($image3,counter++,myTab,myTab.length,testarr)})
    $image4.on('click', function () {move($image4,counter++,myTab,myTab.length,testarr)})
    $image5.on('click', function () {move($image5,counter++,myTab,myTab.length,testarr)})
    $image6.on('click', function () {move($image6,counter++,myTab,myTab.length,testarr)})


    $("img[alt='1']").click(function() {
        $("img[alt='1']").detach().appendTo('#rangees')
        myTab.push(1)
    })

    $("img[alt='2']").click(function() {
        $("img[alt='2']").detach().appendTo('#rangees')
        myTab.push(2)
    })
    $("img[alt='3']").click(function() {
        $("img[alt='3']").detach().appendTo('#rangees')
        myTab.push(3)
    })
    $("img[alt='4']").click(function() {
        $("img[alt='4']").detach().appendTo('#rangees')
        myTab.push(4)
    })
    $("img[alt='5']").click(function() {
        $("img[alt='5']").detach().appendTo('#rangees')
        myTab.push(5)
    })
    $("img[alt='6']").click(function() {
        $("img[alt='6']").detach().appendTo('#rangees')
        myTab.push(6)
    })


    function move(x) {
        x.detach().appendTo('#rangees')
        myTab.push(x)
    }
    $("img[alt='1']").click(move($("img[alt='1']")))
    $("img[alt='2']").click(move($("img[alt='2']")))
    $("img[alt='3']").click(move($("img[alt='3']")))
    $("img[alt='4']").click(move($("img[alt='4']")))
    $("img[alt='5']").click(move($("img[alt='5']")))
    $("img[alt='6']").click(move($("img[alt='6']")))



    if(myTab.length == 6 ) {
        if(myTab == test){
            var win = "Vous avez gagné"
            win.appendTo("button")
        } else {
            var loose = "Vous avez perdu"
            loose.appendTo("button")
        }
    }
        console.log(loose )


    // create test array
    var test = [ 1, 2, 3, 4, 5, 6]
    var imgs = $( "img" )
    var imgsl = $( "img" ).length

    $("img[alt='1']").click(function() {
        // place them in the the #melangees div
        $("img[alt='1']").detach().appendTo('#rangees')
    })

    for(i = 0; i < imgsl ; i++ ){
        imgs[i].click(function() {
            $( "#rangees > img" ).eq( x ).detach().appendTo('#melangees')

            // place them in the the #melangees div
            imgs[i].detach().appendTo('#rangees')
        })
    }



    $("img[alt='arc1']").click(function() {
        // place them in the the #melangees div
        $("img[alt='arc1']").detach().appendTo('#rangees')
    })
    $("img[alt='arc1']").click(function() {
        // place them in the the #melangees div
        $("img[alt='arc1']").detach().appendTo('#rangees')
    })
    $("img[alt='arc1']").click(function() {
        // place them in the the #melangees div
        $("img[alt='arc1']").detach().appendTo('#rangees')
    })
    $("img[alt='arc1']").click(function() {
        // place them in the the #melangees div
        $("img[alt='arc1']").detach().appendTo('#rangees')
    })
    $("img[alt='arc1']").click(function() {
        // place them in the the #melangees div
        $("img[alt='arc1']").detach().appendTo('#rangees')
    })




function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}


            var x = Math.floor(Math.random() * (eleNum - 0 + 1)) + 0;
            console.log
            $( "#rangees > img" ).eq( x ).detach().appendTo('#melangees')
        }

                    var target = Math.floor(Math.random() * eleNum );
            $( "#rangees > img" ).eq(myTable[i]).detach().appendTo( $("#melangees").eq(myTable[i]) )

$("img[alt='arc1']").detach().appendTo('#rangees')
var x = Math.floor(Math.random() * 5) + 1
$( "#melangees.img" ).eq( x ).detach().appendTo('#rangees')

*/