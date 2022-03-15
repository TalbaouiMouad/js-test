var div=document.getElementsByTagName('div');
var qst=document.getElementsByTagName('h3');
var rpns=document.getElementsByTagName('p');
for (let elem of rpns) {
    elem.style.display='none';
}

// for (const i of div) {
//     var lol=i.childNodes;
//     console.log(lol);
//     lol[1].addEventListener('click',()=>{
//         if (lol[3].style.display==='none'){
//             lol[3].style.display='block'; 
//             console.log('hello');
//         }else{if(lol[3].style.display=='block'){
//             lol[3].style.display='none';
//         console.log('hi');}
//         }
//      })  
// }
for (const i of div) {
    var lol=i.childNodes;
    console.log(lol);
    lol[1].addEventListener('click',()=>{
        if (lol[3].style.display==='none'){
            lol[3].style.display='block'; 
            console.log('hello');
        }else{if(lol[3].style.display=='block'){
            lol[3].style.display='none';
        console.log('hi');}
        }
     })  
}

qst.addEventListener('click',()=>{
   let i=div.indexOf()