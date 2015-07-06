
"use strict";

if (process.title == "iojs") {
    require("./lib6/register").install({es5: false, lazy: true, runtime: null});
}
else {
    require("./lib5/register").install({es5: true, lazy: true, runtime: null});
}
