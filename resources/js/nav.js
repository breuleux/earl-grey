
function $$quaintNavFunctionality() {

    function toggleActive(elem) {
        if (elem.className.indexOf(" active") !== -1)
            elem.className = elem.className.replace(" active", "");
        else
            elem.className = elem.className + " active"
    }

    var dropdowns = document.querySelectorAll(".dropdown");

    for (var i = 0; i < dropdowns.length; i++) {
        (function (_elem) {
            var elem = _elem.childNodes[0];
            elem.onclick = elem.ontouchend = function (e) {
                e.stopPropagation();
                e.preventDefault();
                toggleActive(_elem);
            }
        })(dropdowns[i]);
    }
}

