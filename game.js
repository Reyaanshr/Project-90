player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score= 0;
document.getElementById("player1_name").innerHTML = player1_name+ ":";
document.getElementById("player2_name").innerHTML = player2_name+ ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "question turn-"+ player1_name;
document.getElementById("player_answer").innerHTML = "answer turn-"+ player2_name;
function send(){
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    actualanswer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>"+number1+"X"+number2;
    input_box = "<br> Answer: <input type = 'text' id='answer_box'>";
    check_button = "<br> <br> <button class= 'btn btn=info' onclick='check'> Check </button>";

    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").innerHTML = "";
    document.getElementById("number2").innerHTML = "";
}

question_turn= "player1";
answer_turn= "player2";


function check(){
    getanswer = document.getElementById("answer_box").value;
    if(getanswer == actualanswer){
        if(answer_turn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if (question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question turn-" + player2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question turn-" + player1_name;
     }

     if (answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer turn-" + player2_name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer turn-" + player1_name;
     }
}