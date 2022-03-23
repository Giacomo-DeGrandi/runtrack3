'use_strict';


document.addEventListener('DOMContentLoaded', () => {


    let check2 = document.body.clientHeight
    console.log(check2)

    document.addEventListener('scroll', function(e) {

        let check = window.scrollY

        var prop =  check / check2
        var color = prop * 255
        var col1 = Math.floor(color*2)
        var col2 = Math.floor(color/3)
        var col3 = Math.floor(color*4)

        var foot = document.querySelector('footer') //select footer

        foot.style.backgroundColor = 'rgb(' + [col1,col2,col3].join(',') + ')';

    });

})

/*


    setInterval(() => {
        if (scrolling) {
            if(check > 100)
            foot.style.backgroundColor = "#"+(colpcrt).toString(16)+(colpcrt).toString(16)+(colpcrt).toString(16);
            colpcrt =+ colpcrt
            scrolling = false;
        } else {
            foot.style.backgroundColor = "#"+(colpcrt).toString(16)+(colpcrt).toString(16)+(colpcrt).toString(16);
            colpcrt =- colpcrt
            scrolling = false;
        }
    },300);
 */