document.getElementById("quiz-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const selectedAnswer = document.querySelector('button.selected');

  if (selectedAnswer) {
    const answerValue = selectedAnswer.value;

    localStorage.setItem("MissingLetter", answerValue);
    console.log("Selected answer registered in local storage:", answerValue);

    window.location.href = "https://impanda9.github.io/9missnr2/";
  } else {
    console.log("No answer selected");
  }
});

const answerButtons = document.querySelectorAll('.answer-option button');
answerButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    answerButtons.forEach(function (btn) {
      btn.classList.remove('selected');
    });

    button.classList.add('selected');
  });
});
