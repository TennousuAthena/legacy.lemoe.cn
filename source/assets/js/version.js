function getVer(){
    "use strict";
    function loadVersion()
    {
        var xmlhttp;
        xmlhttp=new XMLHttpRequest();
        xmlhttp.open("GET","/version.json?"+Math.round(new Date().getTime()),false);
        xmlhttp.send();
        if (xmlhttp.status != 200){
            document.getElementsByClassName("powered")[0].innerHTML += "| 🧪Development Environment";
        };
        return JSON.parse(xmlhttp.response);
    }
    let v = loadVersion();
    let p = document.getElementsByClassName("powered");

    let verification = v.verification==true ? "<span title='Verified by "+v.author+" - "+v.commit_sha+"'>✔️</span>" : "";
    p[0].innerHTML += " | Build "+v.total+"# <a target='_blank' href='" + v.url +"' title='Commit “"+v.msg + "” compiled on " + v.date+"'>"+v.commit_id+"</a>";
    p[0].innerHTML += verification;
}

document.addEventListener("DOMContentLoaded", getVer);