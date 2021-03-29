player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

 playerscore1= 0;
 playerscore2= 0;

document.getElementById("player1_name").innerHTML=player1_name + ":";
document.getElementById("player2_name").innerHTML=player2_name + ":";

document.getElementById("scccc").innerHTML=playerscore1;
document.getElementById("scccc1").innerHTML=playerscore2;

document.getElementById("Q").innerHTML="Question turn : " + player1_name;
document.getElementById("A").innerHTML="Answer turn : " + player2_name;

function check() {
    tword = document.getElementById("iput_of_q").value;

     sword = tword.toLowerCase();
     console.log(sword); 

     chartstorege = sword.charAt(1);
     console.log (chartstorege);
     lenght_divide_2 = Math.floor(sword.length/2);
	charAt2 = sword.charAt(lenght_divide_2);
	console.log(charAt2);

    lenght_minus_1 = sword.length - 1; 
    charAt3 = sword.charAt(lenght_minus_1); 
	console.log(charAt3);

    remove_charAt1 = sword.replace(chartstorege, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
	console.log(remove_charAt3);

    question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Send</button>";
    row =  question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
document.getElementById("iput_of_q").value = "";

}