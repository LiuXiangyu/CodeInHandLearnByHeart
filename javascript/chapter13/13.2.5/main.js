if (window.XMLHttpRequest)
{
    xmlObj = new XMLHttpRequest();
} else if (window.ActiveXObject)
{
    xmlObj = new ActiveXObject("Microsoft.XMLHTTP");
}

var strURL="http://localhost/query?id=";

function handleResponse()
{
    if (xmlObj.readyState == 4)
    {
        if (xmlObj.status == 200)
        {
            var data = xmlObj.responseText();
        }
    }
    return data;
}

function getInfo(persons)
{
    var personinfos = {};
    for (var person in persons)
    {
        xmlObj.onreadystatechange = handleResponse;
        xmlObj.open("GET",strURL + person[id],true);
        xmlObj.send("");
        personinfos[person[id]] = handleResponse();
    }
}
