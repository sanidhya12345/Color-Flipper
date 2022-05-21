var btn=document.getElementById("btn");

btn.onclick=changecolor;


function changecolor(e){
    e.preventDefault();
    document.body.style.backgroundColor="blue";
}