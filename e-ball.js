//  // this keeps track of how many questions have been asked
//     var questionCount = 0;

//     // responses the ball can give
//     var goodResponses = [
//       "It is certain",
//       "Without a doubt",
//       "Yes, definitely",
//       "Most likely",
//       "Signs point to yes",
//       "Outlook good",
//       "You may rely on it",
//       "As I see it, yes"
//     ];

//     var neutralResponses = [
//       "Ask again later",
//       "Cannot predict now",
//       "Reply hazy, try again",
//       "Better not tell you now"
//     ];

//     var badResponses = [
//       "Don't count on it",
//       "My reply is no",
//       "Very doubtful",
//       "Outlook not so good",
//       "My sources say no"
//     ];

//     // switches which screen you can see
//     function showScreen(screenId) {
//       var screens = document.querySelectorAll(".screen");
//       for (var i = 0; i < screens.length; i++) {
//         screens[i].classList.remove("active");
//       }
//       document.getElementById(screenId).classList.add("active");
//     }


//     // when user clicks "Shake the Ball"
//     function submitQuestion() {
//       var question = document.getElementById("user-question").value;

//       // don't do anything if the box is empty
//       if (question.trim() === "") {
//         alert("Please type a question first!");
//         return;
//       }

//       questionCount = questionCount + 1;

//       // show the loading/shaking screen
//       showScreen("screen-loading");

//       // wait 1.8 seconds then show the answer
//       setTimeout(function() {
//         var answer = pickAnswer();
//         showAnswer(answer);
//       }, 1800);
//     }


//     // picks a random response based on some weighted odds
//     function pickAnswer() {

//       // after 5 questions, there's a 1 in 4 chance of a funny response
//       if (questionCount >= 5) {
//         var funnyRoll = Math.random();
//         if (funnyRoll < 0.25) {
//           var funnyIndex = Math.floor(Math.random() * funnyResponses.length);
//           return { text: funnyResponses[funnyIndex], type: "funny" };
//         }
//       }

//       // otherwise pick from the normal responses
//       // roughly 50% good, 25% neutral, 25% bad
//       var roll = Math.random();

//       if (roll < 0.50) {
//         var i = Math.floor(Math.random() * goodResponses.length);
//         return { text: goodResponses[i], type: "good" };
//       } else if (roll < 0.75) {
//         var j = Math.floor(Math.random() * neutralResponses.length);
//         return { text: neutralResponses[j], type: "neutral" };
//       } else {
//         var k = Math.floor(Math.random() * badResponses.length);
//         return { text: badResponses[k], type: "bad" };
//       }
//     }


//     // puts the answer on the screen
//     function showAnswer(answer) {
//       document.getElementById("answer-text").textContent = answer.text;

//       // update the question counter
//       document.getElementById("question-count").textContent = "Questions asked: " + questionCount;

//       // show the funny message box if it was a funny response
//       var funnyBox = document.getElementById("funny-message");
//       if (answer.type === "funny") {
//         funnyBox.style.display = "block";
//         funnyBox.textContent = "✨ The 8-ball is getting a little weird...";
//       } else {
//         funnyBox.style.display = "none";
//       }

//       // clear the question box for next time
//       document.getElementById("user-question").value = "";

//       showScreen("screen-answer");
//     }