//variables
var tablePopulation = "";
// variables for dropdown lists
var females = "";
var males = "";
//turtle family
var turtles = [
{turtleId:1, turtleName:"Mom", turtleGender:"Girl", turtlePicture:"Images/turtleBasic.png", turtleGenetics:"AaBbCcDdEe"},
{turtleId:2, turtleName:"Dad", turtleGender:"Boy", turtlePicture:"Images/turtleBasic.png", turtleGenetics:"AaBbCcDdEe"}];
//variables moved to global to try and make them work
var childGender = '';
var childGenetics;
var babypicture;

//Onload the table and dropdown selectors are populated based off turtle family
function populateTable(){
	tablePopulation = '<thead><tr><td>Turtle ID Number</td><td>Turtle Name</td><td>Turtle Gender</td><td>Turtle Picture</td></tr></thead><tbody>';
	tLen = turtles.length;
	//reset list before populating
	females = "";
	males = "";
		for (i = 0; i < tLen; i++) {
		tablePopulation += '<tr> <td>' + turtles[i].turtleId + '</td><td>' + turtles[i].turtleName + '</td><td>' + turtles[i].turtleGender + '</td><td><img src="' + turtles[i].turtlePicture + '" style="width:252px;height:252px;"></td></tr>';
			if (turtles[i].turtleGender == "Girl"){
				females += '<option value="' + turtles[i].turtleId + '">' + turtles[i].turtleName + '</option>';
			} else {
				males += '<option value="' + turtles[i].turtleId + '">' + turtles[i].turtleName + '</option>';
			}		
		}
	document.getElementById("femaleList").innerHTML = females;
	document.getElementById("maleList").innerHTML = males;
	tablePopulation += '</tbody>';
	document.getElementById("turtleList").innerHTML = tablePopulation;
}

//After clicking breed this code executes to "breed" the selected turtles
function breed(){
	//sets values from drop downs
	var female = document.getElementById("femaleList").value - 1;
	var male = document.getElementById("maleList").value - 1 ;
	var femaleGenetics = turtles[female].turtleGenetics;
	var maleGenetics = turtles[male].turtleGenetics;
	//sets values for child attributes
	//var childGenetics = geneSplice(femaleGenetics, maleGenetics);
	childGenetics = geneSplice(femaleGenetics, maleGenetics);
	//var childGender = '';
	var randomGender = Math.floor((Math.random() * 10));
	if (randomGender <= 4) {
			childGender = "Girl";
		} else {
			childGender = "Boy";
		}
	//var babypicture = getBabyPicture(childGenetics);	
	babypicture = getBabyPicture(childGenetics);	
	//gets displays baby info and gets name input from user	
	document.getElementById("nameTheChild").innerHTML = "<form> Congrats, Baby Turtle is a " + childGender + "!<br>Please Enter Baby's Name: " + '<input type="text" name="name" id="babyName" value="Baby ' + childGender + '"> <button type="button" onclick="addBaby()">Submit</button></form><br>'
	+ childGenetics + '<img src="' + babypicture + '" style="width:126px;height:126px;">'; 
	}

//The makings of the child	
function geneSplice(sf, sm){
	var setOne = sf.split("");
	var setTwo = sm.split("");
	var setChild = [];
	var child = "";
	var gLen = setOne.length;
	var babyGenetics = "";
	var i = 0;
	do {
		var ranNumA = Math.floor((Math.random() * 10));
		var ranNumB = Math.floor((Math.random() * 10));
		if (ranNumA <= 4) {
			setChild.push(setOne[i]);
		} else {
			setChild.push(setOne[i+1]);
		}
		if (ranNumB <= 4){
			setChild.push(setTwo[i]);
		} else {
			setChild.push(setTwo[i+1]);
		}
		i += 2;
	}
	while (setChild[i-2] == setChild[i-1] && setChild[i-2] == setChild[i-2].toLowerCase());	
	for (i; i<gLen; i+=2) {
				setChild.push(setOne[i]);
				setChild.push(setTwo[i+1]);
	}
	gLen = setChild.length;
	babyGenetics = setChild.toString();
	babyGenetics = babyGenetics.replace(/,/g, "");
	return babyGenetics;
}

//Setting up correct turtle picture
function getBabyPicture(childGens){
	var letter = "A"
	var p = childGens.indexOf(letter);
	if (p > -1){
		return "Images/turtleBasic.png"
	} else {
		letter = "B"
		p = childGens.indexOf(letter);
		if (p > -1){
			return "Images/turtleSage.png"
		} else {
			letter = "C"
			p = childGens.indexOf(letter);
			if (p > -1){
				return "Images/turtleSand.png"
			} else {
				letter = "D"
				p = childGens.indexOf(letter);
				if (p > -1){
					return "Images/turtleSeafoam.png"
				} else {
					return "Images/turtleWater.png"
				}
			}
		}
	}
}

//Adding the new child to the family
function addBaby(){
	var childName = document.getElementById("babyName").value
	document.getElementById("nameTheChild").innerHTML = "";
	tLen = turtles.length +1;
	turtles.push({turtleId:tLen, turtleName:childName, turtleGender:childGender, turtlePicture:babypicture, turtleGenetics:childGenetics});
	populateTable();
}