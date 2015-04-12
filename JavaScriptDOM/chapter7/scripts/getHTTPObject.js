function getHTTPObject() {
    if (typeof XMLHttpRequest == "undefined") {
        XMLHttpRequest = function() {
            try {
                return new ActiveXObject("Msxml2.XMlHTTP.6.0");
            } catch (e) {
            }
            try {
                return new ActiveXObject("Msxml.XMLHTTP.3.0");
            } catch (e) {
            }
            try {
                return new ActiveXObject("Msxml2.XMlHTTP");
            } catch (e) {
            }
            return false;
        }
    }
    return new XMLHttpRequest();
}
