let a=document.createElement("button");
let b=document.createTextNode("Button");
a.appendChild(b);
let c=document.getElementById("body");

let d=document.createElement("div");
d.setAttribute("id","div1");
c.appendChild(d);
document.getElementById("div1").style.height="100px";
document.getElementById("div1").style.background="lightgreen";
document.getElementById("div1").style.display="flex";
document.getElementById("div1").style.justifyContent="center";
document.getElementById("div1").style.alignItems="center";


d.appendChild(a);

a.setAttribute("id","ptag");
a.setAttribute("href","#");
a.setAttribute("onclick","f()");
let e=document.getElementById("ptag");
e.style.color="black";
e.style.background="lightblue";
e.style.fontSize="30px";
e.style.fontWeight="bold";
e.style.textDecoration="none";
e.style.borderRadius="25px";
e.style.borderRadius="25px";
e.addEventListener("mouseover",mor);
e.addEventListener("mouseout",mot);

let x=document.createElement("input");
x.setAttribute("id","input");
x.setAttribute("type","text");
x.setAttribute("placeholder","Type something here...")
c.appendChild(x);
x.style.height="30px";
x.style.height="30px";
x.style.borderRadius="10px";
x.style.margin="10% 0 0 10%";



function f(){
    alert("Thats my boy....!");
}

function mor(){
document.getElementById("div1").style.background="lightblue";
e.style.background="lightgreen";

let y=document.getElementById("input").value;
let z=y.length;

if(document.getElementById("div1").style.justifyContent=="center"&&z<1){
   document.getElementById("div1").style.justifyContent="start";
}
else{
if(z<1){
   document.getElementById("div1").style.justifyContent="center";
}}
}




function mot(){
e.style.background="lightblue";
document.getElementById("div1").style.background="lightgreen";

}



