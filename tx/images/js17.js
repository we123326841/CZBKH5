/**
 * Created by allen on 2016/12/21.
 */
// alert("什么");
function $(myid) {
    return document.getElementById(myid);
    
}

function show(imgo) {
    imgo.style.display = "block";
}

function hidenn(imgo) {
    imgo.style.display = "none";
}


function scroll() {
    if (window.pageYOffset != null) {
        // alert("什么鬼1");
        return {
            left: window.pageXOffset,
            right: window.pageYOffset
        }
    } else if (document.compatMode === "CSS1Compat") {
        // alert("什么鬼2");
        return {
            left: document.documentElement.scrollLeft,
            right: document.documentElement.scrollTop
        }
    }
    // alert("什么鬼3");
    return {
        left: document.body.scrollLeft,
        right: document.body.scrollTop

    }
}

