{console.clear();const a=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),b=window.requestAnimationFrame,c=document.documentElement;function autoAlpha(e,o,t){e.style.opacity=o,e.style.visibility=0===o?"hidden":"inherit",t&&(e.style.pointerEvents="none")}function eLink(){let e="hello.giolara@gmail.com",o="mailto:";for(const t of document.querySelectorAll(".e-link"))t.querySelector(".e-link-text")&&(t.querySelector(".e-link-text").textContent=e),t.href=o+e}function noLoader(){var e=document.querySelector("#m-loader"),o=document.querySelector("#h-loader");autoAlpha(e,0,!0),autoAlpha(o,0)}function loader(){b&&!a||noLoader()}window.addEventListener("load",function(){eLink()})}