function but1() {
document.getElementsByClassName("sect")[0].style.display ='block';
document.getElementsByClassName("but")[0]  .style.background = 'blue';
document.getElementsByClassName("sect")[1].style.display ='none';
document.getElementsByClassName("sect")[2].style.display ='none';
document.getElementsByClassName("sect")[3].style.display ='none';
}

function but2() {
document.getElementsByClassName("sect")[0].style.display ='none';
document.getElementsByClassName("sect")[1].style.display ='block';
document.getElementsByClassName("but")[1]  .style.background = 'blue';
document.getElementsByClassName("sect")[2].style.display ='none';
document.getElementsByClassName("sect")[3].style.display ='none';
}
function but3() {
document.getElementsByClassName("sect")[0].style.display ='none';
document.getElementsByClassName("sect")[1].style.display ='none';
document.getElementsByClassName("sect")[2].style.display ='block';
document.getElementsByClassName("but")[2]  .style.background = 'blue';
document.getElementsByClassName("sect")[3].style.display ='none';
}
function but4() {
document.getElementsByClassName("sect")[0].style.display ='none';
document.getElementsByClassName("sect")[1].style.display ='none';
document.getElementsByClassName("sect")[2].style.display ='none';
document.getElementsByClassName("sect")[3].style.display ='block';
document.getElementsByClassName("but")[3]  .style.background = 'blue';
}