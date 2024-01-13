const block = document.getElementById("block")
const hole = document.getElementById("hole")

hole.addEventListener("animationiteration", ()=>{
   let random = -((Math.random() * 300)+150);
   hole.style.top = random + "px"
})