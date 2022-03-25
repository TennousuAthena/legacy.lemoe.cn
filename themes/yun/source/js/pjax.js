/* global Yun */
window.loadScript = function (url, callback){
  var script = document.createElement ("script")
  script.type = "text/javascript";
  if (script.readyState){ //IE
      script.onreadystatechange = function(){
          if (script.readyState == "loaded" || script.readyState == "complete"){
              script.onreadystatechange = null;
              callback();
          }
      };
  } else { //Others
      script.onload = function(){
          callback();
      };
  }
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
/**
 * 判断是否为主页，以决定是否显示侧边栏
 * (非 PJAX 已预渲染，无需判断)
 */
function isHome() {
  if (window.location.pathname === CONFIG.root) {
    document.body.classList.add("is-home");
  } else {
    document.body.classList.remove("is-home");
  }
}

function initPjax() {
  new Pjax({
    selectors: ["title", ".js-Pjax", "main", "aside"],
  });
}

/**
 * 使用 PJAX 成功时触发
 */
function onPjaxSuccess() {
  isHome();
  // Yun.utils.renderKatex();
  window.loadScript("https://cdn.jsdelivr.net/npm/twikoo@latest/dist/twikoo.all.min.js", function () {
    if(typeof window.twicomment != "undefined"){
      twikoo.init(window.twicomment)
    }
  })

}


window.onload = function () {
  onPjaxSuccess()
}

document.addEventListener("DOMContentLoaded", initPjax);
document.addEventListener("DOMContentLoaded", isHome);
document.addEventListener("pjax:success", onPjaxSuccess);