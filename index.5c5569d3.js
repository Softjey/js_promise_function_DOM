var e=document.querySelector(".message");function n(e,n){return new Promise(function(t){e.addEventListener(n,function(){t("It was ".concat(n," on the element: ").concat(e.nodeName,", id: ").concat(e.id,"."))},{once:!0})})}var t=function(n){e.hidden=!1,e.innerHTML=n},c=document.getElementById("login"),o=document.getElementById("password"),i=document.getElementById("submit");n(c,"click").then(t),n(o,"click").then(t),n(i,"click").then(t),n(c,"input").then(t),n(o,"input").then(t),n(c,"blur").then(t),n(o,"blur").then(t),n(i,"blur").then(t);
//# sourceMappingURL=index.5c5569d3.js.map