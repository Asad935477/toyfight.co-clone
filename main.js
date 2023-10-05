import './style.css'

let main = document.querySelector("#main");
let image = document.querySelector("#page>img");

main.addEventListener("mousemove",function(effect){
  image.style.top = 1-effect.y*0.05 + "px"
  image.style.left= 1-effect.x*0.05 + "px"
})