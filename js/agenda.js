function iniciar(){
var boton=document.getElementById('grabar');
boton.addEventListener('click', nuevoitem, false);
mostrar();
} 

function nuevoitem(){
var clave=document.getElementById('clave').value;
var valor=document.getElementById('texto').value;
var urgencia=document.getElementById('urgencia').value;
var fecha=document.getElementById('fecha').value;

var valores = [valor, urgencia, fecha]

sessionStorage.setItem(clave, valores);
mostrar();
document.getElementById('clave').value='';
document.getElementById('texto').value='';
document.getElementById('urgencia').value='';
document.getElementById('fecha').value='';


} 
function mostrar(){
var cajadatos=document.getElementById('cajadatos');
cajadatos.innerHTML='<div><button id="borrar_todo" onclick="eliminarTodo()">Eliminar Todo</button></div>';
for(var f=0;f<sessionStorage.length;f++){
var clave=sessionStorage.key(f);
var valor=sessionStorage.getItem(clave);
var urgencia=sessionStorage.getItem(urgencia);
var fecha=sessionStorage.getItem(fecha);
cajadatos.innerHTML+='<div>'+clave+','+valor+' <br/><button id="borrar" onclick="eliminar(\''+clave+'\')">Eliminar</button></div>';
}
} 
function eliminar(clave){
if(confirm('Estas Seguro?')){
sessionStorage.removeItem(clave);
mostrar();
}
} 
function eliminarTodo(){
if(confirm('Estas Seguro?')){
sessionStorage.clear();
mostrar();
}
} window.addEventListener('load', iniciar, false);
