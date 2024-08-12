document.querySelectorAll(".tree li").forEach(function(e){var t=document.createElement("span");t.innerHTML=e.firstChild.textContent,t.style.cursor="pointer",e.insertBefore(t,e.firstChild),e.firstChild.nextSibling.remove(),t.addEventListener("click",function(){var t=e.querySelector("ul");t.hidden=!t.hidden})});
//# sourceMappingURL=index.771fd263.js.map
