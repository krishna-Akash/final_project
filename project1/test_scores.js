var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

function addScore(){
	var name=$("name").value;
	var score=$("score").value
	score=parseFloat(score)
	if(name==""){
		$("error1").innerHTML="<p>Name cannot be empty! </p"
	}
	else{
		$("error1").innerHTML=""
		names.push(name);
	}
	if(score<0 || score > 100 || isNaN(score)){
		$("error2").innerHTML="<p> Please enter a valid input! </p"
	}
	else{
		$("error2").innerHTML=""
		scores.push(score);
	}
}



function displayResults(){
	var html_str="<p> Average Score: "
	var avg_score=0;
	var total_score=0;
	var max_score=Math.max(...scores)
	var high_score_index=scores.indexOf(max_score)

	for (let i = 0; i < scores.length; i++) {
		total_score=total_score+scores[i];
	}
	avg_score=total_score/scores.length;

	$("results").innerHTML="<h4>Results</h4>" + html_str+ " " + avg_score + "</p>" + "<p>High Score: " + names[high_score_index] + " with a score of " + max_score + " </p"
}

function displayScores(){
	var table_content=""
	for (let index = 0; index < scores.length; index++) {
		var table_content=table_content+ "<tr> <td> " + names[index] + "</td> <td> " + scores[index] + " </td>"
	}
	$("scores_table").innerHTML= "&nbsp;"+table_content
}

window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};


