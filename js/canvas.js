var  canvas = document.querySelector("#lienzo")
var ctx = canvas.getContext("2d")


//TRIANGULO HOJAS

ctx.beginPath();
ctx.moveTo(180,150)
ctx.lineTo(10,150)
ctx.lineTo(90,10)


//RELLENO
ctx.fillStyle = "#5b9a68";
ctx.fill();


//TRONCO
ctx.beginPath();
ctx.fillStyle = "#3b543f";
ctx.fillRect(80,80,20,100);

//RAMAS
//RAMA Derecha Arriba
ctx.beginPath();
ctx.moveTo(98,100)
ctx.lineTo(120,85)


ctx.lineWidth= 5;
ctx.strokeStyle= "#3b543f";
ctx.stroke();

//RAMA Derecha Abajo
ctx.beginPath();
ctx.moveTo(98,140)
ctx.lineTo(120,125)


ctx.lineWidth= 5;
ctx.strokeStyle= "#3b543f";
ctx.stroke();

//RAMA IZQ
ctx.beginPath();
ctx.moveTo(100,140)
ctx.lineTo(55,120)


ctx.lineWidth= 5;
ctx.strokeStyle= "#3b543f";
ctx.stroke();








var  canvas = document.querySelector("#lienzo2")
var ctx = canvas.getContext("2d")


//TRIANGULO HOJAS

ctx.beginPath();
ctx.moveTo(180,150)
ctx.lineTo(10,150)
ctx.lineTo(90,10)


//RELLENO
ctx.fillStyle = "#5b9a68";
ctx.fill();


//TRONCO
ctx.beginPath();
ctx.fillStyle = "#3b543f";
ctx.fillRect(80,80,20,100);

//RAMAS
//RAMA Derecha Arriba
ctx.beginPath();
ctx.moveTo(98,100)
ctx.lineTo(120,85)


ctx.lineWidth= 5;
ctx.strokeStyle= "#3b543f";
ctx.stroke();

//RAMA Derecha Abajo
ctx.beginPath();
ctx.moveTo(98,140)
ctx.lineTo(120,125)


ctx.lineWidth= 5;
ctx.strokeStyle= "#3b543f";
ctx.stroke();

//RAMA IZQ
ctx.beginPath();
ctx.moveTo(100,140)
ctx.lineTo(55,120)


ctx.lineWidth= 5;
ctx.strokeStyle= "#3b543f";
ctx.stroke();










