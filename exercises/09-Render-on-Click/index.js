let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here

const newDiv = document.createElement("div");	
newDiv.style.background="yellow";
newDiv.innerHTML="Hello World";

let body=document.querySelector("body");
body.append(newDiv);

});