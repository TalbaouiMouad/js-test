var img=document.getElementById('image');
var frstButton= document.getElementById('button1');
var scndtButton= document.getElementById('button2');
var like= document.getElementById('like');
var dislike= document.getElementById('dslike');
var nmbrlike,nmbrdislike;

 function getlike() {
    return localStorage.getItem("likes")
      ? Number(localStorage.getItem('likes'))
      : 0 ;
  }

function getdislike() {
    return localStorage.getItem("dslikes")
    ? Number(localStorage.getItem('dslikes'))
    : 0 ;
}

nmbrlike = getlike();
nmbrdislike = getdislike();
like.textContent =nmbrlike;
dislike.textContent = nmbrdislike;

function addLike(){
    like.textContent = ++nmbrlike;
    localStorage.setItem("likes", nmbrlike.toString());
}
function addDislike(){
    dislike.textContent = ++nmbrdislike;
    localStorage.setItem("dslikes", nmbrdislike.toString());
}

frstButton.addEventListener('click',addLike);
scndtButton.addEventListener('click',addDislike);
img.addEventListener('dblclick',addLike);




