document.querySelector("#mybutton").onclick = function(){
    const h1 = document.querySelector("#myH1");

    console.log(h1.style);

    h1.style.color = "blue";
    h1.style.backgroundColor = "#00ff00";
    h1.style.fontFamily = "consolas";
    h1.style.textAlign = "center";
    h1.style.border = "4px solid";
    h1.style.borderColor = "red";
    h1.style.width = "250px";

}
