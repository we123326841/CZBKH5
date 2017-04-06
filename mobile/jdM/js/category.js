/**
 * Created by wanghao on 17/3/25.
 */
window.onload = function () {
    // console.log("呵呵");
    var right_box = document.getElementsByClassName("category-main-right")[0];
    var left_box = document.getElementsByClassName("category-main-left")[0];
    var left_ul  = document.getElementsByClassName("category-main-left-ul")[0];
    var left_box_height = left_box.offsetHeight;
    var left_ul_height = left_ul.offsetHeight;
    console.log("box="+left_box_height+",ul="+left_ul_height);

    var startY = 0;
    var moveY = 0;
    var stanceY = 0;
    var curr = 0;
    var zhongjianzhi = 0
    var startTime = 0;
    var endTime = 0;


    left_ul.addEventListener("touchstart",function (e) {
        startTime = (new Date()).getTime();
        console.log("touchstart="+e.touches[0].clientY);
        startY = e.touches[0].clientY;
    });

    left_ul.addEventListener("touchmove",function (e) {
        console.log("touchmove="+e.touches[0].clientY);
        moveY = e.touches[0].clientY;
        //stanceY 正上

        stanceY = startY - moveY;

        if (curr-stanceY >= (left_box_height-45-left_ul_height)-150&&curr-stanceY<=150) {
            removeTrantion();
            setTransform(curr - stanceY);
            zhongjianzhi = curr - stanceY;
        }




    });


    left_ul.addEventListener("touchend",function (e) {
        endTime = (new Date()).getTime();
        // console.log("touchend="+e.touches[0].clientY);
        curr = zhongjianzhi;
       if(curr-stanceY <= (left_box_height-45-left_ul_height)){
           curr = left_box_height-45-left_ul_height;
           addtrantion();
           setTransform(curr);

       }

       if(curr-stanceY>=0){
           curr = 0;
           addtrantion();
           setTransform(curr);
       }


       if (endTime - startTime <200 && stanceY==0){
           console.log(e.target);
           e.target.color = "RGB(207,55,72)";
           var lis = left_ul.getElementsByTagName("li");
           for (var i = 0 ;i<lis.length; i++){
               lis[i].index = i;
                lis[i].className = "";
           }

           e.target.parentNode.className = "now";

           if(e.target.parentNode.index*50 < -(left_box_height-45-left_ul_height)){
               curr = -e.target.parentNode.index*50
               addtrantion();
               setTransform(curr);
           }else{
               curr = left_box_height-45-left_ul_height;
               addtrantion();
               setTransform(curr);
           }

           right_box.style.transaction = "all 2s ease 0s";
           right_box.style.webkitTransition = "all 2s ease 0s";
           right_box.style.opacity=0;
           setTimeout(function () {
               // right_box.style.transaction = "none";
               // right_box.style.webkitTransition = "none";
               right_box.style.opacity= 1.0;
           },2000);

       }




        stanceY = 0;
        startY = 0;
        moveY =0;
        endTime = 0;
        startTime = 0;
    });


    function addtrantion() {
        left_ul.style.transaction = "all .3s ease 0s";
        left_ul.style.webkitTransition = "all .3s ease 0s";
    }

    function removeTrantion() {
        left_ul.style.transaction = "none";
        left_ul.style.webkitTransition = "none";
    }

    function  setTransform(a) {
        left_ul.style.transform = "translateY("+a+"px)";
        left_ul.style.webkitTransform = "translateY("+a+"px)";


    }


}