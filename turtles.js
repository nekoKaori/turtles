var tablePopulation = "";
var turtles = [
{turtleId:001, turtleName:"Mom", turtleGender:"Girl", turtlePicture:"Images/turtleBasic.png", turtleGenetics:"AABBCCDDEE"},
{turtleId:002, turtleName:"Dad", turtleGender:"Boy", turtlePicture:"Images/turtleBasic.png", turtleGenetics:"ABBCCDDEEE"}];

function populateTable(){
	tablePopulation = '<thead><tr><td>Turtle ID Number</td><td>Turtle Name</td><td>Turtle Gender</td><td>Turtle Picture</td></tr></thead><tbody>';
	tLen = turtles.length;
	for (i = 0; i < tLen; i++) {
	tablePopulation += '<tr> <td>' + turtles[i].turtleId + '</td><td>' + turtles[i].turtleName + '</td><td>' + turtles[i].turtleGender + '</td><td><img src="' + turtles[i].turtlePicture + '" style="width:252px;height:252px;"></td></tr>';
	}
	tablePopulation += '</tbody>';
	document.getElementById("turtleList").innerHTML = tablePopulation;
}