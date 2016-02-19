
$$quaintReppleList = [];

function $$quaintReppleInstall() {
    $$quaintReppleList.forEach(function (config) {
        var repl = require("quaint-repple-" + config.language);
        repl.setup(config);
    });
}
