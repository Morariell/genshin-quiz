// Create a quiz!!!!!
document.getElementById("btn").addEventListener("click", btnClicked);

let score = 0;

//When button clicked it show incorrect correct and number out of 6
function btnClicked() {
  // shows correct
  let answer;
  //question 1
  let q1 = document.getElementById("q1").value.toLowerCase();
  if (q1 === "midsummer island adventure") {
    answer = "Correct";
    score++;
  } else {
    answer = "Incorrect";
  }
  document.getElementById("output1").innerHTML = `${answer}`;
  //question 2
  let q2 = document.getElementById("q2").value.toLowerCase();
  if (q2 == "primogems") {
    answer = "Correct";
    score++;
  } else if (q2 == "genesis crystals") {
    answer = "Correct";
    score++;
  } else {
    answer = "Incorrect";
  }
  document.getElementById("output2").innerHTML = `${answer}`;
  //question 3
  let q3 = document.getElementById("q3").value.toLowerCase();
  if (q3 == "5") {
    answer = "Correct";
    score++;
  } else {
    answer = "Incorrect";
  }
  document.getElementById("output3").innerHTML = `${answer}`;
  //question 4
  let q4 = document.getElementById("q4").value.toLowerCase();
  if (q4 == "xiao") {
    answer = "Correct";
    score++;
  } else {
    answer = "Incorrect";
  }
  document.getElementById("output4").innerHTML = `${answer}`;
  //question 5
  let q5 = document.getElementById("q5").value.toLowerCase();
  if (q5 == "the knave") {
    answer = "Correct";
    score++;
  } else if (q5 == "arlecchino") {
    answer = "Correct";
    score++;
  } else {
    answer = "Incorrect";
  }
  document.getElementById("output5").innerHTML = `${answer}`;
  //question 6
  let q6 = document.getElementById("q6").value.toLowerCase();
  if (q6 == "guy") {
    answer = "Correct";
    score++;
  } else {
    answer = "Incorrect";
  }
  document.getElementById("output6").innerHTML = `${answer}`;

  // results!!1\
  let percent = (score * 100) / 6;
  let result = `Your Score: ${score}/6 (${percent}%)`;
  document.getElementById("outputNum").innerHTML = `${result}`;

  // p/n message
  let msg;
  if (percent >= 50) {
    msg = "Good job!";
  } else {
    msg = "What are you doing????";
  }
  document.getElementById("msg").innerHTML = `${msg}`;
}
