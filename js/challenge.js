let counter = document.getElementById("counter");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let heart = document.getElementById("heart");
let pause = document.getElementById("pause");
let likes = document.getElementsByClassName("likes")[0];
let commentList = document.querySelector("#list")
let submitBtn = document.getElementById("submit");


function incrementCounter() {
  counter.innerText = parseInt(counter.innerText, 10) + 1;
};

var intervalID = setInterval(incrementCounter, 1000);

plus.addEventListener("click", function() {
  incrementCounter();
});

minus.addEventListener("click", function() {
    counter.innerText = parseInt(counter.innerText, 10) - 1;
});

heart.addEventListener("click", function() {
  let counterValue = counter.innerText;

  let counterValueElement = document.getElementById(counterValue);

  if (counterValueElement === null) {

      let likeTimes = document.createElement("li");

      likeTimes.innerHTML = `${counterValue} has been liked <span>1</span> time`;

      likeTimes.id = counterValue;
      likes.appendChild(likeTimes);
  } else {
      let spanElement = counterValueElement.getElementsByTagName("span")[0];

      let spanValue = parseInt(spanElement.innerText, 10);

      spanElement.innerText = spanValue + 1;
        if (spanValue === 1) {
            counterValueElement.innerHTML += "s";
        }
  }
});

pause.addEventListener("click", function(e){
  if (pause.innerText === "pause"){
      pause.innerText = "resume"
      clearInterval(intervalID)
  }
  else {
    intervalID = setInterval(function () {
          counter.innerText++;
      }, 1000);
      pause.innerText = "pause"
  }
});

submitBtn.addEventListener("click", function(e){
  e.preventDefault();
  let comment = document.querySelector("#comment-form > input[type=text]").value
  commentList.innerHTML += `<li>${comment}</li>`
  document.querySelector("#comment-form").reset();
});

