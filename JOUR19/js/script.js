 const option1 = document.querySelector('.opt1'),
     option2 = document.querySelector('.opt2'),
     option3 = document.querySelector('.opt3');
 let wrong = new Audio('js/error.wav');
 let correct = new Audio('js/true.wav');
 let score = 0;

 let answer = 0,
     num1, num2, faux1, faux2, allAnswers, switchAnswers;

 function generate_equation() {
     num1 = Math.floor(Math.random() * 13);
     num2 = Math.floor(Math.random() * 13);
     faux1 = Math.floor(Math.random() * 13);
     faux2 = Math.floor(Math.random() * 13);
     allAnswers = [];
     switchAnswers = [];

     answer = num1 + num2;

     document.querySelector('.num1').innerHTML = num1;
     document.querySelector('.num2').innerHTML = num2;
     document.querySelector('.score').innerHTML = `SCORE: ${score}`;

     allAnswers = [answer, faux1, faux2]
     for (let i = allAnswers.length; i--;) {
         switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0])
     }

     option1.innerHTML = switchAnswers[0];
     option2.innerHTML = switchAnswers[1];
     option3.innerHTML = switchAnswers[2];

 }


 option1.addEventListener("click", function() {
     if (option1.innerHTML == answer) {
         correct.play();
         score++;
         generate_equation();
     } else {
         wrong.play();
     }
 })
 option2.addEventListener("click", function() {
     if (option2.innerHTML == answer) {
         correct.play();
         score++;
         generate_equation();
     } else {
         wrong.play();
     }
 })
 option3.addEventListener("click", function() {
     if (option3.innerHTML == answer) {
         correct.play();
         score++;
         generate_equation();
     } else {
         wrong.play();
     }
 })
 generate_equation();