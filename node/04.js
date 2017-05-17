/**
 * Created by wanghao on 17/5/10.
 */
var frames = [];

frames[frames.length] = `
╭~~~╮
(o^.^o)
`;
frames[frames.length] = `
╭~~~╮
(o~.~o)
`;
frames[frames.length] = `
╭~~~╮
(o@.@o)
`;
frames[frames.length] = `
╭ ﹌╮
(o'.'o)
`;

var fps = 10;
var current = 0;
var render = () =>{
    process.stdout.write('\033[2J');
    process.stdout.write('\033[0f');
    if(current === frames.length){
        current = 0;
    }
    process.stdout.write(frames[current++]);

};

setInterval(render,1000/fps);