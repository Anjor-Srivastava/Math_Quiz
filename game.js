var actual_answer = 0;
var question_turn = "player1";
var answer_turn = "player2";
var player_1_score = 0;
var player_2_score = 0;
var player_1_name = localStorage.getItem("Math Quiz Player 1");
var player_2_name = localStorage.getItem("Math Quiz Player 2");

function load_content() {
    document.getElementById("player1_name").innerHTML = player_1_name + ": <span id='player1_score'>" + player_1_score + "</span>";
    document.getElementById("player2_name").innerHTML = player_2_name + ": <span id='player2_score'>" + player_2_score + "</span>";
    document.getElementById("question_turn").innerHTML += player_1_name;
    document.getElementById("answer_turn").innerHTML += player_2_name;
}

function send_question() {
    var number_1 = document.getElementById("first_number").value;
    var number_2 = document.getElementById("second_number").value;
    actual_answer = parseInt(number_1) * parseInt(number_2);
    var question_number = "<h4>" + number_1 + " X " + number_2 + "</h4>";
    var input_box = "<br>Answer : <input id='answer_input'>";
    var check_button = "<br><br><button id='check_button' onclick='check()'>Check</button>";
    var row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("first_number").value = "";
    document.getElementById("second_number").value = "";
    document.getElementById("send_button").style.display = "none";
}

function check() {
    var get_answer = document.getElementById("answer_input").value;
    if (get_answer == actual_answer)
    {
        if (answer_turn == "player1")
        {
            player_1_score++;
            document.getElementById("player1_score").innerHTML = player_1_score;
        }
        else
        {
            player_2_score++;
            document.getElementById("player2_score").innerHTML = player_2_score;
        }
    }

    if (question_turn == "player1")
    {
        question_turn = "player2";
        answer_turn = "player1";
        document.getElementById("question_turn").innerHTML = "Question turn - " + player_2_name;
        document.getElementById("answer_turn").innerHTML = "Answer turn - " + player_1_name;
    }
    else
    {
        question_turn = "player1"; 
        answer_turn = "player2";
        document.getElementById("question_turn").innerHTML = "Question turn - " + player_1_name;
        document.getElementById("answer_turn").innerHTML = "Answer turn - " + player_2_name;
    }

    document.getElementById("output").innerHTML = "";
    document.getElementById("send_button").style.display = "block";
}

function end_game() {
    window.location.replace("index.html");
}