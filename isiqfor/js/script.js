function myFunction() {
    setInterval(function () { changeColor1() },  2000);
     setInterval(function () { changeColor2() }, 6000);
     setInterval(function () { changeColor3() }, 8000);
}
function changeColor1() {
    document.getElementsByClassName("top")[0].style.background = 'red';
    document.getElementsByClassName("top")[1].style.background = 'gray';
    document.getElementsByClassName("top")[2].style.background = 'gray';
}

function changeColor2() {
    document.getElementsByClassName("top")[1].style.background = 'green';
    document.getElementsByClassName("top")[0].style.background = 'gray';
     document.getElementsByClassName("top")[2].style.background = 'gray';
}


function changeColor3() {
    document.getElementsByClassName("top")[2].style.background = 'yellow';
    document.getElementsByClassName("top")[0].style.background = 'gray';
    document.getElementsByClassName("top")[1].style.background = 'gray';
}

