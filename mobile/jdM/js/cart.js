/**
 * Created by wanghao on 17/3/26.
 */
window.onload = function () {
    var checkes = document.getElementsByClassName("jd-checked");
    var lajilou = document.getElementsByClassName("lajilou");


    var dialog  =document.getElementsByClassName("jd-cart-dialog")[0];
    var dialogBox  =document.getElementsByClassName("jd-cart-dialog-box")[0];
    var cancel = document.getElementsByClassName("dialog-cancel")[0];
    var submit = document.getElementsByClassName("dialog-submit")[0];

    console.log(lajilou);

    for (var i = 0 ; i < checkes.length ;i++){

        checkes[i].onclick = function () {
            console.log("点击");
            var haschecked = this.getAttribute("checked");
            console.log(haschecked);
          if (haschecked){
              this.removeAttribute("checked");
          }else{
            this.setAttribute("checked"," ");
          }
        };
    }
    var delete_top = null;
   for(var j = 0; j < lajilou.length ; j++)
   {

       lajilou[j].onclick = function () {
            delete_top = this.getElementsByClassName("delete-top")[0];
           var delete_bot = this.getElementsByClassName("delete-bot")[0];
           dialog.style.display = "block";
           dialogBox.className = "jd-cart-dialog-box my-allen-animation";
           delete_top.style.transition = "all 1s ease 0s";
           delete_top.style.webkitTransition = "all 1s ease 0s";
           delete_top.style.transform = "translateX(-5px) translateY(-5px) rotate(-45deg)";
           delete_top.style.webkitTransform = "translateX(-5px) translateY(-5px) rotate(-45deg)";


       };

   }

   cancel.onclick = function () {
       delete_top.style.transform = "translateX(0px) translateY(0px) rotate(0deg)";
       delete_top.style.webkitTransform = "translateX(0px) translateY(0px) rotate(0deg)";
       dialog.style.display = "none";
       dialogBox.className = "jd-cart-dialog-box";
   }




}