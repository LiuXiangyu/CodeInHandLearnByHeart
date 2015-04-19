function createXHR() {
    if (typeof XMLHttpRequest != "undefined") {
        return new XMLHttpRequest();
    } else if (typeof ActiveXObject != "undefined") {
        if (typeof arguments.callee.activeXString != "string") {
            var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
                "MSXML2.XMLHttp"], i, len;
            for (i = 0, len = versions.length; i < len; ++i) {
                try {
                    new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                } catch (ex) {
                }
            }
        }
        return new ActiveXObject(arguments.callee.activeXString);
    } else {
        throw new Error("No XHR object available.");
    }
}

var xhr = createXHR();
xhr.open("get", "example.php", false);

xhr.open(null);

if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
    alert(xhr.responseText);
} else {
    alert("Request was unsuccessful: " + xhr.status);
}

var xhr = createXHR();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
            alert(xhr.responseText);
        } else {
            alert("Request was unsuccessful: " + xhr.status);
        }
    }
}
xhr.open("get", "example.php", true);
xhr.send(null);

function addURLParam(url, name, value) {
    url += (url.indexOf("?") == -1 ? "?" : "&");
    url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
    return url;
}

function submitData() {
    ....;
    xhr.open("post", "postexample.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var form - document.getElementById("user-info");
    xhr.send(serialize(form));
}
