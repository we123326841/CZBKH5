/**
 * Created by wanghao on 17/5/11.
 */


var q = '请输入用户名\n';
var p = '请输入密码\n';
var success= '恭喜你哟登陆成功\n';
var username = '';


var users = {'admin': '1234', 'user': '4321', 'allen': '2742'};

process.stdout.write(q);
process.stdin.on('data', (input)=> {
    //此时的data是流
    // process.stdout.write("大大王");
    input = input.toString().trim();
    if (!username) {
      var  usersKey=Object.keys(users);
        if (usersKey.indexOf(input) === -1) {
            process.stdout.write("用户名错误," + q);
            username = '';
        } else {
            username = input;
            process.stdout.write(p);
        }
    } else {
        if (users[username] == input) {
            process.stdout.write(success);
        } else {
            process.stdout.write(p);
        }
    }
});