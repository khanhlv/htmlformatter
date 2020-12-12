String.space = function(a) {
    var b = [],
        e;
    for (e = 0; e < a; e++) b.push(" ");
    return b.join("")
};

function convertFormat() {
	var a = document.querySelector("#input").value;
	var value = vkbeautify.xml(a);
	
	
	document.querySelector("#input").focus();
	if (value) {
		document.querySelector("#input").value = value;
	}
}

function addIndent(e) {
    if ($("#sel1").length > 0) {
        for (var t = $("#sel1").val(), a = "", i = 0; i < t; i++)
            a += "\t";
        var r = e.split("\n")
          , o = [];
        $.each(r, (function(e, t) {
            o.push(a + t)
        }
        )),
        e = o.join("\n")
    }
    return e
}

function convertClear() {
	document.querySelector("#input").focus();
	document.querySelector("#input").value = '';
}

function convertRemoveSpace() {
	var a = document.querySelector("#input").value;
	var value = vkbeautify.xmlmin(vkbeautify.xml(a));
	
	document.querySelector("#input").focus();
	if (value) {
		document.querySelector("#input").value = value;
	}
}

