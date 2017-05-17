/**
 * Created by wanghao on 17/5/14.
 */
const  fs =require('fs');
const  path = require('path');
const  iconv = require('iconv-lite');
const  readline = require('readline');

var filename = path.join(__dirname,'./lyrics/血染的风采.lrc');
var streamReader = fs.createReadStream(filename);
streamReader.on('data',(chunk)=>{
    console.log(chunk.toString());
})