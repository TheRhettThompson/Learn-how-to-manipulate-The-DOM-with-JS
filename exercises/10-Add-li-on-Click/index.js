let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here

const newLi = document.createElement("li");	
newLi.innerHTML="Fourth element";
	
let myList=document.querySelector("#myList");
myList.append(newLi);
	


});
