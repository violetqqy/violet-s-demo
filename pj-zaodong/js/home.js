/**
 * Created by qqy on 15/9/28.
 */

var myScroll;

function loaded() {
    myScroll = new IScroll('#wrapper', {
        mouseWheel: true
    });
}

document.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, false);