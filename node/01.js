/**
 * Created by wanghao on 17/5/10.
 */
// var a = 1;
// //此处的console是Node平台提供的
// console.log(1);
// console.error(new Error('error'));

var argv = process.argv.slice(2);
console.log(argv.toString());

switch (argv[0]){
    case 'init':
        console.log("你需要安装 ");
        break;
    case 'install':
        console.log("你在安装"+argv[1]);
        break;


}
