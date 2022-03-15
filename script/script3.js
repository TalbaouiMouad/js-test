var body=document.getElementById('body');
var time= new Date();
var heur=time.getHours();
console.log(heur);
function modeNuit(){
body.classList.toggle("mode_nuit")
}
if (heur>=18) {
    body.classList.add("mode_nuit")  
} 