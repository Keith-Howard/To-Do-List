// the lets are variable of specific elements by their ID's from our html so we can manipulate them in javascript

let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let doneContainer = document.getElementById('doneContainer');
let inputField = document.getElementById('inputField');
let numClicks = 0;

/* const handleClick = () => {
  numClicks++;
  if (numClicks === 1) {
    singleClickTimer = setTimeout(() => {
      numClicks = 0;
      console.log("single click!");
    }, 400);
  } else if (numClicks === 2) {
    clearTimeout(singleClickTimer);
    numClicks = 0;kfile:///C:/Users/Keith/OneDrive/JavascriptProjects/ToDoList/index_table.htmlv
    console.log("double click!");
  }
};
document.addEventListener("click", handleClick); */


addToDoButton.addEventListener('click', function(){
	// todo check for child in todo container
	var children = toDoContainer.children;
	if (children.length != 0) {
		// while input = child or input not = child
		// input exists or input doesn't exist proceed to code below
		for (var i = 0; i < children.length; i++) {
			var tableChild = children[i].innerHTML;
			if (inputField.value == tableChild) {
				alert("Entry Already Exists!");
				inputField.value = ""
				break
				}
			}
	}
	if (inputField.value != "") {
		var paragraph = document.createElement('p');
		paragraph.classList.add('paragraph-styling');
		paragraph.innerText = inputField.value;
	
		toDoContainer.appendChild(paragraph);
		inputField.value = "";
		
		/* paragraph.addEventListener('dblclick', function(){
			doneContainer.appendChild(paragraph);
		}) */
		
		paragraph.addEventListener('click', function(){
			numClicks++;
			if (numClicks == 1) {
				singleClickTimer = setTimeout(() => {
					numClicks = 0;
					console.log("single click!");
					if (paragraph.parentElement.id == "toDoContainer") {
						doneContainer.appendChild(paragraph);
					}
						}, 400);
				} 
			else if (numClicks == 2) {
				clearTimeout(singleClickTimer);
				numClicks = 0;
				console.log("double click!");
				if (paragraph.parentElement.id == "doneContainer") {
					doneContainer.removeChild(paragraph);
				}
				}
			});
		
		/* paragraph.addEventListener('click', function(){
			doneContainer.removeChild(paragraph);
		}) */
	}
})

dg = new Array();
dg[0]=new Image();dg[0].src="images/dg0.gif";
dg[1]=new Image();dg[1].src="images/dg1.gif";
dg[2]=new Image();dg[2].src="images/dg2.gif";
dg[3]=new Image();dg[3].src="images/dg3.gif";
dg[4]=new Image();dg[4].src="images/dg4.gif";
dg[5]=new Image();dg[5].src="images/dg5.gif";
dg[6]=new Image();dg[6].src="images/dg6.gif";
dg[7]=new Image();dg[7].src="images/dg7.gif";
dg[8]=new Image();dg[8].src="images/dg8.gif";
dg[9]=new Image();dg[9].src="images/dg9.gif";
dgam=new Image();dgam.src="images/dgam.gif";
dgpm=new Image();dgpm.src="images/dgpm.gif";

function dotime(){ 
	var d=new Date();
	var hr=d.getHours(),mn=d.getMinutes(),se=d.getSeconds();

	// set AM or PM
	document.ampm.src=((hr<12)?dgam.src:dgpm.src);

	// adjust from 24hr clock
	if(hr==0){hr=12;}
	else if(hr>12){hr-=12;}

	document.hr1.src = getSrc(hr,10);
	document.hr2.src = getSrc(hr,1);
	document.mn1.src = getSrc(mn,10);
	document.mn2.src = getSrc(mn,1);
	document.se1.src = getSrc(se,10);
	document.se2.src = getSrc(se,1);
}

function getSrc(digit,index){
	return dg[(Math.floor(digit/index)%10)].src;
}

function initializeClock(){
	dotime();
	setInterval(dotime,30000);
}

window.onload=initializeClock();

