// document.getElementById("about").onclick = function(){
//     document.getElementById("home").style.color = "white"
//     document.getElementById("about").style.color = "red"
// }

// document.getElementById("home").onclick = function(){
//     document.getElementById("home").style.color = "red"
//     document.getElementById("about").style.color = "white"
// }

// document.getElementById("services").onclick = function(){
//     document.getElementById("home").style.color = "white"
//     document.getElementById("services").style.color = "red"
// }

const x = document.querySelectorAll("a");
x.forEach((btn) =>{
    btn.addEventListener("click", function(){
        x.forEach(btn=>{
            btn.style.color = "white"
        })
        btn.style.color = "red"
     })
 });