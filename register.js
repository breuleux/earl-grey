
"use strict";

if (process.title == "iojs") {
    require("./lib6/register").install({es5: false, lazy: true, noboil: true});
}
else {
    require("./lib5/register").install({es5: true, lazy: true, noboil: true});
}
