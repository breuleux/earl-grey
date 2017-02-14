
var $$quaintReppleList = [];
var $$quaintReppleInstances = [];
var CodeMirror = null;

function $$quaintReppleInstall() {
    function go(rest) {
        if (rest.length === 0) return;
        var config = rest.shift();
        var repl = require("quaint-repple-" + config.language);
        CodeMirror = repl.codemirror;
        return repl.setup(config).then(function (result) {
            $$quaintReppleInstances.push(result);
            return go(rest);
        });
    }
    return go($$quaintReppleList);
}
