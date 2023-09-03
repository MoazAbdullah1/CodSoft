document.addEventListener("DOMContentLoaded", () => {
    const createQuizBtn = document.getElementById("createQuizBtn");
    const takeQuizBtn = document.getElementById("takeQuizBtn");

    createQuizBtn.addEventListener("click", () => {
        // Redirect to quiz creation page or open a modal
    });

    takeQuizBtn.addEventListener("click", () => {
        
        // Redirect to quiz listing page or open a modal
    });
});



function checkAnswer() {
            
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    
    
    if (selectedOption) {
        var userAnswer = selectedOption.value;
        
        var correctAnswer = "C";

        
        if (userAnswer === correctAnswer) {
            alert("Correct answer!");
        } else {
            alert("Incorrect answer. Try again.");
        }
    } else {
        alert("Please select an answer.");
    }
}



