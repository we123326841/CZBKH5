/**
 * Created by wanghao on 17/5/14.
 */
'use strict';
const fs = require('fs');
const path = require('path');
let file1  = path.join(__dirname,'./two.jpg');
// let target  = path.join(__dirname,'./two.jpg');
let target  = path.join(__dirname,'./frames/two.jpg');

fs.rename(file1,target);