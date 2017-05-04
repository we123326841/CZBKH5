/**
 * Created by wanghao on 17/4/28.
 */
(function (angular,window) {
    console.log("service");
    var app2 = angular.module('app.services.main',[]);
    app2.service('MainService',['$window',function ($window) {












       // var lists = [{id:1, text:"什么鬼",completed:true},{id:2,text:"洗刷刷",completed:true},{id:3,text:"吃饭饭",completed:false}];
        var storage= $window.localStorage;
        var lists = storage["allenstorage"]?JSON.parse(storage["allenstorage"]):[];
        for(var i = 0 ; i < lists.length; i++){
            if(lists[i].$$hashKey){
                delete lists[i].$$hashKey;
            }
        }
        this.getlists = function () {
            return lists;
        }


        this.save = function () {
            storage["allenstorage"] = JSON.stringify(lists);
        }

        this.remove = function (id) {
            console.log(id);
            for(var i = 0 ; i < lists.length; i++){
                if (lists[i].id === id){
                    lists.splice(i,1);
                }
            }
        };


        this.clear = function () {
            var result = [];
            for(var i = 0 ; i < lists.length; i++){
                if (!lists[i].completed){
                    result.push(lists[i]);
                }
            }

            lists = result;

            return lists;
        };


        this.show = function () {
            for(var i = 0 ; i < lists.length; i++){
                if (lists[i].completed){
                    return true
                }
            }

            return false;
        };




        var now = true;
        this.checkall = function () {
            for(var i = 0 ; i < lists.length; i++){
                lists[i].completed = now;
                console.log(now);

            }
            now = !now;

        };

    }]);
})(angular,window);