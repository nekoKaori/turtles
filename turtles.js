var tablePopulation = "";
var females = "";
var males = "";
var turtles = [
{turtleId:001, turtleName:"Mom", turtleGender:"Girl", turtlePicture:"Images/turtleBasic.png", turtleGenetics:"AABBCCDDEE"},
{turtleId:002, turtleName:"Dad", turtleGender:"Boy", turtlePicture:"Images/turtleBasic.png", turtleGenetics:"ABBCCDDEEE"}];

function populateTable(){
	tablePopulation = '<thead><tr><td>Turtle ID Number</td><td>Turtle Name</td><td>Turtle Gender</td><td>Turtle Picture</td></tr></thead><tbody>';
	tLen = turtles.length;
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

function breed(){
	var female = document.getElementById("femaleList").value - 1;
	var male = document.getElementById("maleList").value - 1 ;
	document.getElementById("test").innerHTML = "The mom will be " + female + " and the dad will be " + male;
	var femaleGenetics = turtles[female].turtleGenetics;
	var maleGenetics = turtles[male].turtleGenetics;
	}