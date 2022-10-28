let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here

let select = document.querySelector("#mySelect");
select.addEventListener("change", function() {

for(let item in countries){
    const option= document.createElement("option");
    option.innerHTML=item;
    select.appendChild(option);
}


})