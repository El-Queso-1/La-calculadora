function escribir(n){
    var caja = document.f1.txtcaja1.value;
    document.f1.txtcaja1.value = caja + n;
}
function calcular(){
    var caja = document.f1.txtcaja1.value;
    document.f1.txtcaja1.value = eval(caja);
}
function raiz(){
    var caja = document.f1.txtcaja1.value;
    document.f1.txtcaja1.value = "Math.sqrt(" + caja + ")";
}
function borrar(){
    var caja = document.f1.txtcaja1.value;
    document.f1.txtcaja1.value = caja.slice(0,-1);
}
function cuadrado(){
    var caja = document.f1.txtcaja1.value;
    document.f1.txtcaja1.value = caja * caja;
}
function cubo(){
    var caja = document.f1.txtcaja1.value;
    document.f1.txtcaja1.value = caja * caja * caja;
}
function exp(){
    var caja = document.f1.txtcaja1.value;
    document.f1.txtcaja1.value = caja * caja * caja * caja * caja * caja * caja * caja * caja * caja;
}
function pi(){
    var caja = document.f1.txtcaja1.value;
    document.f1.txtcaja1.value = "Math.PI";
}