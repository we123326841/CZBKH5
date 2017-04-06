/**
 * Created by wanghao on 17/3/25.
 */
window.onload = function () {
    setNavColor();
    settimer();
    lunbo();


}


function lunbo() {
    var jd_ad = document.getElementsByClassName("jd-ad")[0];
    var ad =jd_ad.offsetWidth;
    console.log(ad);
    var lunboul = document.getElementsByClassName("jd-lunbotu")[0];

    var lis = lunboul.getElementsByTagName("li");
    for (var i = 0 ; i<lis.length ;i++){
        lis[i].index = i;
        lis[i].onclick = function () {
            alert(this.index);
        }
    }
    console.log(lis);

    function addTrantion() {
        lunboul.style.transition = "all .3s ease 0s";
        lunboul.style.webkitTransition = "all .3s ease 0s";

    }

    function removeTrantion() {
        lunboul.style.transition = "none";
        lunboul.style.webkitTransition = "none";
    }

    function setTransform(x) {
        lunboul.style.transform = 'translateX(' + x + 'px)';
        lunboul.style.webkitTransform = 'translateX(' + x + 'px)';
    }

    var index = 1;
    var startX = 0;
    var moveX = 0;
    var moveStance =0 ;


   var timer = setInterval(function () {
        index++;


        addTrantion();


        setTransform(-index * ad);
    }, 3000);

    lunboul.addEventListener('transitionEnd', function () {
        console.log("过渡玩了");
        if (index>=9) {
            index = 1;
            removeTrantion();
            setTransform(-index * ad);
        }else if(index<=0){
            index = 8;
            removeTrantion();
            setTransform(-index * ad);
        }
    }, false);

    lunboul.addEventListener('webkitTransitionEnd', function () {
        console.log("过渡玩了");
        if (index>=9) {
            index = 1;
            removeTrantion();
            setTransform(-index * ad);
        }else if(index<=0){
            index = 8;
            removeTrantion();
            setTransform(-index * ad);
        }

    }, false);


    lunboul.addEventListener('touchstart',function (e) {
        startX = e.touches[0].clientX;
        console.log("startX="+startX);
        console.log("clientX="+e.touches[0].clientY);
    });


    lunboul.addEventListener('touchmove',function (e) {
        clearInterval(timer);


        moveX = e.touches[0].clientX;
        console.log("moveX="+moveX);
        moveStance = moveX - startX;

            setTransform(-index * ad + moveStance);


    });

    lunboul.addEventListener('touchend',function (e) {
        console.log("touchend");
        if(Math.abs(moveStance) >ad/3 && moveX!=0 ){
            if (moveStance > 0){
                index--;
            } else {
                index++;
            }
        }

        addTrantion();
        setTransform(-index*ad);

        moveX = 0;
        startX = 0;
        moveStance = 0;
        clearInterval(timer);
        timer = setInterval(function () {
            index++;


            addTrantion();


            setTransform(-index * ad);
        }, 3000);
    });
}


function setNavColor() {
    var headerBox = document.getElementsByClassName("jd-headerbox")[0];
    var ad = document.getElementsByClassName("jd-ad")[0].offsetHeight;


    window.onscroll = function () {
        var scrollTop = document.body.scrollTop;
        console.log("s:" + scrollTop + "-a:" + ad);
        if (scrollTop > ad) {
            headerBox.style.backgroundColor = "rgba(170,0,28,0.85)";
        } else {
            var alpha = 0.85 * scrollTop / ad;
            headerBox.style.backgroundColor = "rgba(170,0,28," + alpha + ")";
        }
    }

}


function settimer() {
    var nums = document.getElementsByClassName("num");
    var totalTime = 4 * 60 * 60;
    var timer = setInterval(function () {
        totalTime--;
        var h = Math.floor(totalTime / (60 * 60));
        var m = Math.floor((totalTime / 60) % 60);
        var s = totalTime % 60;
        nums[0].innerHTML = h < 10 ? 0 : Math.floor(h / 10);
        nums[1].innerHTML = h < 10 ? h : h % 10;

        nums[2].innerHTML = m < 10 ? 0 : Math.floor(m / 10);
        nums[3].innerHTML = m < 10 ? m : m % 10;

        nums[4].innerHTML = s < 10 ? 0 : Math.floor(s / 10);
        nums[5].innerHTML = s < 10 ? s : s % 10;


    }, 1000);
    console.log("time=" + timer);
}